import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import { ArrowLeft, Copy, Check } from 'lucide-react';

const TEAM_MEMBERS = [
  { name: 'Frans Hoorn', title: 'Managing Partner · AI Heroes', photo: '/team/signature/frans.jpg' },
  { name: 'David Homan', title: 'Managing Partner · AI Heroes', photo: '/team/signature/david.jpg' },
  { name: 'Jan Brusse', title: 'Managing Partner · AI Heroes', photo: '/team/signature/jan.jpg' },
];

export const EmailSignature: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<string>('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  const colors = {
    red: '#D9534F',
    blue: '#2563EB'
  };

  // All red
  const lineColor = colors.red;
  const titleColor = colors.red;

  const member = TEAM_MEMBERS.find(m => m.name === selectedMember);
  const isFormValid = member && phone && email;

  const handleMemberSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.value;
    setSelectedMember(name);
    // Auto-fill email based on first name
    if (name) {
      const firstName = name.split(' ')[0].toLowerCase();
      setEmail(`${firstName}@aiheroes.io`);
    }
  };

  const generateHTMLSignature = (useLocalImages = false) => {
    if (!member) return '';
    const photoUrl = useLocalImages ? member.photo : `https://aiheroes.io${member.photo}`;

    const waPhone = phone.replace(/[\s+]/g, '');
    return `<table cellpadding="0" cellspacing="0" style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;"><tr><td bgcolor="${lineColor}" height="5" style="font-size: 1px; line-height: 1px;">&nbsp;</td></tr><tr><td bgcolor="#F5F5F4" style="padding: 15px;"><table cellpadding="0" cellspacing="0"><tr><td style="vertical-align: top; padding-right: 15px;"><img src="${photoUrl}" alt="${member.name}" width="74" height="100" style="display: block;"></td><td style="vertical-align: middle;"><div style="font-size: 17px; font-weight: 600; color: #1C1917;">${member.name}</div><div style="font-size: 13px; color: ${titleColor}; font-weight: 500; margin: 4px 0;">${member.title}</div><table cellpadding="0" cellspacing="0" style="margin-top: 8px;"><tr><td bgcolor="#ffffff" style="padding: 4px 10px;"><a href="https://aiheroes.io" style="color: #1C1917; text-decoration: underline; font-size: 12px;">aiheroes.io</a></td><td width="8"></td><td bgcolor="#ffffff" style="padding: 4px 10px;"><a href="https://wa.me/${waPhone}" style="color: #1C1917; text-decoration: underline; font-size: 12px;">${phone}</a></td><td width="8"></td><td bgcolor="#ffffff" style="padding: 4px 10px;"><a href="mailto:${email}" style="color: #1C1917; text-decoration: underline; font-size: 12px;">${email}</a></td></tr></table></td></tr></table></td></tr></table>`;
  };

  const handleCopy = async () => {
    if (!isFormValid) return;
    try {
      // Use production URLs for the copied HTML
      const html = generateHTMLSignature(false);
      // Copy as rich HTML so it renders properly when pasted in email clients
      const blob = new Blob([html], { type: 'text/html' });
      const clipboardItem = new ClipboardItem({
        'text/html': blob,
        'text/plain': new Blob([html], { type: 'text/plain' })
      });
      await navigator.clipboard.write([clipboardItem]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Nav */}
      <nav className="bg-white border-b border-stone-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Logo className="h-8 w-8" variant="square" />
            <div>
              <span className="font-bold text-brand-dark">AI Heroes</span>
              <span className="text-stone-400 mx-2">|</span>
              <span className="text-stone-500 text-sm">Email Signature</span>
            </div>
          </div>
          <Link to="/" className="text-sm text-stone-500 hover:text-brand-dark flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            Back to site
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-serif text-brand-dark mb-2">Email Signature Generator</h1>
          <p className="text-stone-500">Select your name, add your phone number, and copy the signature.</p>
        </div>

        {/* Form */}
        <div className="bg-white p-6 border border-stone-200 rounded-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Name
              </label>
              <select
                value={selectedMember}
                onChange={handleMemberSelect}
                className="w-full px-3 py-2 border border-stone-300 rounded-md text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
              >
                <option value="">Select your name...</option>
                {TEAM_MEMBERS.map(m => (
                  <option key={m.name} value={m.name}>{m.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Title
              </label>
              <input
                type="text"
                value={member?.title || ''}
                readOnly
                className="w-full px-3 py-2 border border-stone-300 rounded-md text-stone-500 bg-stone-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Phone
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+31 6 12 34 56 78"
                className="w-full px-3 py-2 border border-stone-300 rounded-md text-brand-dark placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@aiheroes.io"
                className="w-full px-3 py-2 border border-stone-300 rounded-md text-brand-dark placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
              />
            </div>

          </div>

          <button
            onClick={handleCopy}
            disabled={!isFormValid}
            className={`mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md font-medium transition-colors ${
              isFormValid
                ? 'bg-brand-red text-white hover:bg-red-600'
                : 'bg-stone-200 text-stone-400 cursor-not-allowed'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Signature
              </>
            )}
          </button>
        </div>

        {/* Preview - This is the actual HTML you can select and copy */}
        <div className="mb-8">
          <h2 className="text-xl font-serif text-brand-dark mb-4">Preview</h2>
          <p className="text-stone-500 text-sm mb-3">Select and copy this signature, or use the button above.</p>
          <div className="bg-white p-8 border border-stone-200 rounded-lg">
            {isFormValid && member ? (
              <div dangerouslySetInnerHTML={{ __html: generateHTMLSignature(true) }} />
            ) : (
              <div className="text-stone-400 text-center py-8">
                Select your name and fill in phone to see the preview
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6">
          <h3 className="font-bold text-brand-dark mb-3">How to use</h3>
          <ol className="text-stone-600 text-sm space-y-2">
            <li>1. Select your name and fill in your phone number</li>
            <li>2. Click "Copy Signature"</li>
            <li>3. In Gmail: Settings → See all settings → Signature → Paste</li>
            <li>4. In Outlook: File → Options → Mail → Signatures → Paste</li>
          </ol>
        </div>
      </main>
    </div>
  );
};
