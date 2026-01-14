---
title: "AI Training Track"
date: "2025-03-17"
author: colabrio
rank_math_internal_links_processed: "1"
_wpb_shortcodes_custom_css: ".vc_custom_1742220054520{padding-top: 200px !important;padding-bottom: 100px !important;background-color: rgba(136,136,136,0.05) !important;*background-color: rgb(136,136,136) !important;}.vc_custom_1720687306685{padding-top: 90px !important;padding-bottom: 70px !important;background-color: rgba(10,10,10,0.05) !important;*background-color: rgb(10,10,10) !important;}.vc_custom_1721298229236{padding-left: 16.4px !important;}"
_wpb_shortcodes_custom_css_updated: "1"
rank_math_analytic_object_id: "331"
breadcrumbs_background_color: 
_breadcrumbs_background_color: field_593d618e8bfd2
page_typography_settings: inherit
_page_typography_settings: field_593a55746376f
_header_title_align: field_59390deb0034e
header_title_align: inherit
_header_background_type: field_59390deaf218a
header_background_type: inherit
_header_menu_contacts_bar_style: field_5941030b7ce5d
header_menu_contacts_bar_style: inherit
_header_menu_style_settings: field_59411fcf0048f
header_menu_style_settings: inherit
_header_menu_add_cap: field_59390deaef9ea
header_menu_add_cap: inherit
_header_menu_use_wrapper: field_59390deaef614
header_menu_use_wrapper: inherit
_header_logo_style: field_59391a16302be
_page_custom_css: field_59390deb083b5
header_logo_style: dark_variant
page_custom_css: "    <style>
        /* Global Styles using the provided color palette */
        :root {
            /* Brand colors */
            --heroic-red: #F42950;
            --charged-yellow: #F9D949;
            
            /* Grey shades */
            --black: #1E1E1E;
            --grey-600: #303030;
            --grey-500: #4b4b4b;
            --grey-400: #787878;
            --grey-300: #A5A5A5;
            --grey-200: #D2D2D2;
            --grey-100: #F0F0F0;
            --white: #FFFFFF;
            
            /* Red to Yellow spectrum */
            --rv-500: #C34040;
            --rv-400: #F42950;
            --rv-300: #F57940;
            --rv-200: #F79440;
            --rv-yellow: #F9D949;
        }
        
        body {
            font-family: 'Recursive', sans-serif;            
          	background-color: #000000;
            color: var(--white);
            line-height: 1.6;
            margin: 0;
            padding: 0;
            font-size: 1rem;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem 2rem;
        }

        h2, h3, h4 {
            font-weight: 700;
            margin-top: 2rem;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: 2.2rem;
            color: var(--white);
            margin-left: 0;
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        h2 svg {
            color: var(--heroic-red);
        }

        h3 {
            font-size: 1.5rem;
            color: var(--white);
        }

        p {
            margin-bottom: 1.5rem;
            font-size: 0.9rem;
        }

        /* Key points box for intro paragraph */
        .key-points {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
            margin: 2rem 0 4rem 0;
        }

        .key-point {
            padding: 2rem;
            text-align: left;
            position: relative;
            display: flex;
            flex-direction: column;
        }
        
        .key-point:nth-child(1) {
            border: 3px solid var(--charged-yellow);
        }
        
        .key-point:nth-child(2) {
            border-top: 3px solid var(--rv-300);
            border-bottom: 3px solid var(--rv-300);
        }
        
        .key-point:nth-child(3) {
            border: 3px solid var(--heroic-red);
        }

        .key-point-title {
            font-weight: bold;
            margin-bottom: 1rem;
            font-size: 1.2rem;
            color: var(--white);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .key-point-title svg {
            width: 24px;
            height: 24px;
        }

        .key-point:nth-child(1) .key-point-title svg {
            color: var(--charged-yellow);
        }
        
        .key-point:nth-child(2) .key-point-title svg {
            color: var(--rv-300);
        }
        
        .key-point:nth-child(3) .key-point-title svg {
            color: var(--heroic-red);
        }

        /* Simple white line */
        .white-line {
            height: 0.5px;
            background-color: var(--white);
            margin: 4rem 0;
        }

        /* Content section */
        .content-section {
            margin-bottom: 5rem;
        }
        
        .boxed-content {
            border: 1px solid var(--white);
            padding: 2.5rem;
            margin: 2rem 0;
        }

        /* Testimonial - bold yellow box */
        .testimonial {
            padding: 2.5rem;
            border: 3px solid var(--charged-yellow);
            margin: 3rem 0;
            position: relative;
        }
        
        .quote-mark {
            position: absolute;
            color: var(--charged-yellow);
            font-size: 5rem;
            line-height: 1;
            top: -1.5rem;
            left: 2rem;
            font-family: Georgia, serif;
        }

        .testimonial-author {
            font-weight: 800;
            text-align: right;
            margin-top: 1.5rem;
            font-size: 1.4rem;
            color: var(--charged-yellow);
        }

        /* Service cards - boxy style */
        .services {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .service-card {
            position: relative;
        }
        
        .service-card:nth-child(1) {
            padding: 2rem;
        }
        
        .service-card:nth-child(2) {
            border-left: 3px solid var(--heroic-red);
            padding: 2rem;
        }

        .service-card h3 {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .service-card h3 svg {
            color: var(--heroic-red);
        }
        
        .service-card:nth-child(2) h3 svg {
            color: var(--heroic-red);
        }

        .price {
            font-weight: bold;
            font-size: 1.3rem;
            color: var(--charged-yellow);
            margin-bottom: 1rem;
            display: inline-block;
            padding: 0.3rem 0.8rem;
            background-color: rgba(249, 217, 73, 0.1);
        }

        /* List styles - minimalist */
        ul {
            list-style-type: none;
            padding-left: 0;
        }

        ul li {
            padding-left: 1.5rem;
            position: relative;
            margin-bottom: 0.8rem;
        }

        ul li:before {
            content: \"—\";
            color: var(--white);
            position: absolute;
            left: 0;
        }

        /* About section */
        .about-highlight {
            font-size: 1.4rem;
            line-height: 1.5;
            margin: 2.5rem 0;
            padding-left: 1.5rem;
            border-left: 3px solid var(--heroic-red);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .container {
                padding: 2rem 1rem;
            }
            
            h2 {
                font-size: 1.8rem;
            }
            
            .key-points {
                grid-template-columns: 1fr;
            }
        }
    </style>"
_footer_show_copyright_section: field_59390dsb07397
footer_show_copyright_section: inherit
footer_is_wrapped: inherit
_footer_is_wrapped: field_59390deb06fd1
footer_hide: inherit
_footer_hide: field_59390deb06b99
_footer_background_type: field_59390deb053ac
footer_background_type: inherit
_footer_background_color: field_57f37ad0e2f5f
footer_background_color: 
_footer_sitename_color: field_57f37823e32d7
footer_sitename_color: 
_page_add_top_padding: field_59390deb03f38
_page_is_wrapped: field_59390deb03b1b
page_add_top_padding: "0"
page_is_wrapped: inherit
page_show_breadcrumbs: inherit
_page_show_breadcrumbs: field_59390deb03328
_page_background_color: field_59390deb02f35
page_background_color: 
_page_background_type: field_46c28bded161ea112fa99f2ef41c857cb5c6db3b
page_background_type: inherit
_header_use_hero: field_59390deb00ef1
_header_height: field_59390deb00b09
header_use_hero: inherit
header_height: 
_header_height_fullscreen: field_59390deb00733
breadcrumbs_text_color: 
_breadcrumbs_text_color: field_593db13395d12
page_use_boxed_wrapper: inherit
_page_use_boxed_wrapper: field_59390deb03738
full_width_margins_type: inherit
_full_width_margins_type: field_591b10dbb4a85_fwgaps_type
footer_text_color: 
_footer_text_color: field_5940ec917da19
footer_logo_widget_type: inherit
_footer_logo_widget_type: field_59390deb04788
footer_as_sticky: inherit
_footer_as_sticky: field_59391743def2b
footer_copyright_section_background: 
_footer_copyright_section_background: field_59390deb0778d
footer_copyright_section_text_color: 
_footer_copyright_section_text_color: field_59390deb07b67
page_sidebar: left
_page_sidebar: field_59390deaf218b
inline_featured_image: "0"
content_wrapper_width: 
_content_wrapper_width: field_591b10dbb4a82342342345623
full_width_margins_size: 
_full_width_margins_size: field_591b10dbb4a85_fwgaps_local
page_sidebar_layout: inherit
_page_sidebar_layout: field_592345234958934
footer_copyright_section_links_color: 
_footer_copyright_section_links_color: field_59390deb07b68
hefo_before: "0"
hefo_after: "0"
page_header_title_typo: "{\"color\":\"#ffffff\"}"
_page_header_title_typo: field_593a55d063770
page_header_subtitle_typo: 
_page_header_subtitle_typo: field_593a565163771
header_menu_text_typo: "{\"color\":\"#ffffff\"}"
_header_menu_text_typo: field_59390deaf05bd
header_menu_hide_border: "1"
_header_menu_hide_border: field_5941261c69959
header_menu_border_type: solid
_header_menu_border_type: field_594126ed0b898
header_menu_border_color: 
_header_menu_border_color: field_594127340b89a
header_background_position: left_center
_header_background_position: field_59390deaf3190
header_background_repeat: no_repeat
_header_background_repeat: field_59390deaf355c
_wpml_media_duplicate: "0"
_wpml_media_featured: "0"
header_height_fullscreen: inherit
_header_tilte_color: field_57dfa8d329961000
header_tilte_color: 
_header_background_color: field_59390deaf2582
header_background_color: 
_header_overlay_color: field_59390deaf3d98
header_overlay_color: 
_header_use_overlay: field_59390deaf3961
header_use_overlay: inherit
_header_background_size: field_59390deaf2d6e
header_background_size: auto
_header_background_image: field_59390deaf2985
header_background_image: "16688"
_header_subtitle: field_593ddebba2fcb
header_subtitle: "<a href=\"#\"><b class=\"color-brand\">Download XML file</b></a> to getting started with shortcode faster."
_header_menu_fixed: field_59390deaf1978
header_menu_fixed: inherit
_header_menu_add_contacts_bar: field_59390deaf0da4
header_menu_add_contacts_bar: inherit
_header_menu_site_name_color: field_57e11ddaaasfffsbc71f6
header_menu_site_name_color: 
_header_menu_text_color: field_57e11ddbc71f6
header_menu_text_color: 
_header_menu_background_color: field_59390deaf01d4
header_menu_background_color: 
_menu_type: field_59390deaefde5
menu_type: inherit
_header_menu_style: field_59390deaefzxf
header_menu_style: inherit
_wpb_vc_js_status: true
_wp_page_template: default
page_header_menu_style: inherit
_page_header_menu_style: field_59390deaefzxf
page_header_add_cap: "0"
_page_header_add_cap: field_59390deaef9ea
page_header_menu_use_wrapper: inherit
_page_header_menu_use_wrapper: field_59390deaef614
page_header_menu_fixed: inherit
_page_header_menu_fixed: field_59390deaf1978
page_header_logo_style: inherit
_page_header_logo_style: field_59391a16302be
page_header_menu_type: inherit
_page_header_menu_type: field_59390deaefde5
page_subheader_visibility: inherit
_page_subheader_visibility: field_59390deaf0da4
page_header_title_visibility: "0"
_page_header_title_visibility: field_59390deb00ef1
page_header_title_fullscreen: inherit
_page_header_title_fullscreen: field_59390deb00733
page_header_title_height: 
_page_header_title_height: field_59390deb00b09
page_header_title_align: left
_page_header_title_align: field_59390deb0034e
page_header_title_background_type: featured
_page_header_title_background_type: field_46c28bded161ea112fa99f2ef41c857cb5c6db3b
page_header_title: 
_page_header_title: field_59390deaf218agrp
page_header_title_use_overlay: inherit
_page_header_title_use_overlay: field_59390deaf3961
page_breadcrumbs_visibility: "0"
_page_breadcrumbs_visibility: field_59390deb03328
page_breadcrumbs_background_type: inherit
_page_breadcrumbs_background_type: field_46c28bded161ea112fa99f2ef41c857cb5c6db3b
page_breadcrumbs: 
_page_breadcrumbs: field_591ac509d1208grpbcbaclcl1
page_breadcrumbs_text_typo: inherit
_page_breadcrumbs_text_typo: field_593db13395d12
page_add_wrapper: inherit
_page_add_wrapper: field_59390deb03b1b
page_content_wrapper_width: 
_page_content_wrapper_width: field_591b10dbb4a82342342345623
page_full_width_margins_size: 
_page_full_width_margins_size: field_591b10dbb4a85_fwgaps_local
page: 
_page: field_591ac509d1208gbgclrlcfpag
page_sidebar_position: inherit
_page_sidebar_position: field_59390deaf218b
page_footer_visibility: inherit
_page_footer_visibility: field_59390deb06b99
page_footer_is_wrapped: inherit
_page_footer_is_wrapped: field_59390deb06fd1
page_footer_text_typo: inherit
_page_footer_text_typo: field_5940ec917da19
page_footer_background_type: inherit
_page_footer_background_type: field_46c28bded161ea112fa99f2ef41c857cb5c6db3b
page_footer: 
_page_footer: field_59390deb057c5grp
page_footer_logo_widget_type: inherit
_page_footer_logo_widget_type: field_59390deb04788
page_footer_is_sticky: inherit
_page_footer_is_sticky: field_59391743def2b
page_footer_copyright_visibility: inherit
_page_footer_copyright_visibility: field_59390dsb07397
page_footer_copyright_section_background_type: inherit
_page_footer_copyright_section_background_type: field_46c28bded161ea112fa99f2ef41c857cb5c6db3b
page_footer_copyright_section: 
_page_footer_copyright_section: field_592fd8901f63agrppg
page_footer_copyright_section_text_typo: inherit
_page_footer_copyright_section_text_typo: field_59390deb07b67
page_footer_copyright_section_links_color: 
_page_footer_copyright_section_links_color: field_59390deb07b68
page_header_menu_style_settings: inherit
_page_header_menu_style_settings: field_59411fcf0048f
page_subheader_style: inherit
_page_subheader_style: field_5941030b7ce5d
page_header_title_custom_subtitle_text: 
_page_header_title_custom_subtitle_text: field_593ddebba2fcb
page_: 
_page_: field_59390deb0171egrp
page_show_arrow: "1"
_page_show_arrow: field_591ac509d4234s
page_arrow_typo: inherited
_page_arrow_typo: field_591ac509d465as
page_social_networks_typo: inherit
_page_social_networks_typo: field_l05mnk93kid43naf2l
page_header_title_use_parallax: inherit
_page_header_title_use_parallax: field_59229bwjeofwnheof3921
page_header_search_visibility: inherit
_page_header_search_visibility: field_592d43df9e26cs
ohio_for_wpbakery_version_only:
  - for_wpbakery_only
_ohio_for_wpbakery_version_only: field_5f3a645f21047
page_dark_mode: inherit
_page_dark_mode: field_591ac911d3se51781624591h
page_dark_mode_switcher: inherit
_page_dark_mode_switcher: field_591ac509d3se51781624593t
page_header_visibility: "1"
_page_header_visibility: field_59390deaef9efdd
page_header_dynamic_typography_color: inherit
_page_header_dynamic_typography_color: field_59390deaf1978asf32fadsgas
page_boxed_wrapper_margins_size: 
_page_boxed_wrapper_margins_size: field_59381c77504bfasfeas
page_header_fixed_position: inherit
_page_header_fixed_position: field_59229b3463432b
page_preloader_visibility: inherit
_page_preloader_visibility: field_5937afa621s71eqfa4
page_social_links_visibility: inherit
_page_social_links_visibility: field_l03249323443247
page_icon_preloading_fontawesome: inherit
_page_icon_preloading_fontawesome: field_592s32431235
page_icon_preloading_ionicons: inherit
_page_icon_preloading_ionicons: field_592s32431236
page_icon_preloading_bootstrap: inherit
_page_icon_preloading_bootstrap: field_592s32431237
page_icon_preloading_linea: inherit
_page_icon_preloading_linea: field_592s32431238
_edit_last: "18"
_edit_lock: "1744629158:18"
page_dark_mode_switcher_typo: inherit
_page_dark_mode_switcher_typo: field_591234509d332523
page_dark_mode_switcher_position: inherit
_page_dark_mode_switcher_position: field_591ac509d3se517812
page_hamburger_menu_caption: inherit
_page_hamburger_menu_caption: field_59390de2350897
page_header_title_author_visibility: "1"
_page_header_title_author_visibility: field_59390deb00ef1s
page_header_title_date_visibility: "1"
_page_header_title_date_visibility: field_59390deb00ef1s2
page_header_title_comments_visibility: "1"
_page_header_title_comments_visibility: field_59390deb00ef1s3
page_arrow_position: inherit
_page_arrow_position: field_591ac509d4234234
rank_math_seo_score: "9"
page_header_title_background_color: 
_page_header_title_background_color: field_f71a874d1a29e0813d847089334dc06aacb34ac2
page_header_title_background_size: auto
_page_header_title_background_size: field_76eb95f020994e4ae5dfd7c1c5066082c0fae308
page_header_title_background_position: center
_page_header_title_background_position: field_1353fb07f7f0311d1a9cbb3184ad6662138c570a
page_header_title_background_repeat: repeat
_page_header_title_background_repeat: field_1db3d466c4d3454f11d3fd4042076eb3b3665ba7
rank_math_focus_keyword: Workshops
rank_math_pillar_content: on
passster_area_shortcode: 
page_header_title_dynamic_typo: inherit
_page_header_title_dynamic_typo: field_59229bda382345s
page_header_sticky: inherit
_page_header_sticky: field_59390deaf1978
_wpb_post_custom_layout: default
rank_math_contentai_score:
  keywords: "74.51"
  wordCount: "0"
  linkCount: "0"
  headingCount: "0"
  mediaCount: "0"
page_header_contained_menu: inherit
_page_header_contained_menu: field_5l92k3239857
page_header_menu_background_type: inherit
_page_header_menu_background_type: field_46c28bded161ea112fa99f2ef41c857cb5c6db3b
page_header_menu: 
_page_header_menu: field_591ac509d1208gbgclrlcfpagbgmn
page_header_menu_border_visibility: inherit
_page_header_menu_border_visibility: field_5941261c69959
page_subheader_background_type: inherit
_page_subheader_background_type: field_46c28bded161ea112fa99f2ef41c857cb5c6db3b
page_subheader: 
_page_subheader: field_59229bda36adbsubheadasstglgbl64backglbp5
page_header_title_vertical_alignment: inherit
_page_header_title_vertical_alignment: field_59229e4312938574
page_footer_fixed_typography_color: inherit
_page_footer_fixed_typography_color: field_59390deb07235235
cmplz_hide_cookiebanner: 
---

<p>[vc_row full_width="stretch_row" content_placement="top" bg_type="image" parallax_style="vcpb-default" bg_image_new="id^247747|url^https://aiheroes.io/wp-content/uploads/2025/03/kipardoxx_minimalistic_waves_and_patterns._vibrant_synthwave__b3927271-aaa7-4e5d-ba32-202275885396_3.png|caption^null|alt^null|title^kipardoxx_minimalistic_waves_and_patterns._vibrant_synthwave__b3927271-aaa7-4e5d-ba32-202275885396_3|description^null" enable_overlay="enable_overlay_value" side_background_title_typo="null" css=".vc_custom_1742220054520{padding-top: 200px !important;padding-bottom: 100px !important;background-color: rgba(136,136,136,0.05) !important;*background-color: rgb(136,136,136) !important;}" title_typo="null"][vc_column][ohio_heading module_type_layout="on_left" heading_type="h1" add_highlighted="1" subtitle_type_layout="without_subtitle" title_typo="{``font_size``:````,``line_height``:````,``letter_spacing``:````,``color``:````,``weight``:``inherit``,``style``:``inherit``,``use_custom_font``:false}" title="QUklMjBUcmFpbmluZyUyMFRyYWNr" title_before_typo="{``font_size``:````,``font_size_tablet``:````,``font_size_mobile``:````,``line_height``:````,``line_height_tablet``:````,``line_height_mobile``:````,``letter_spacing``:````,``letter_spacing_tablet``:````,``letter_spacing_mobile``:````,``color``:````,``weight``:``inherit``,``style``:``inherit``,``transform``:``inherit``,``decoration``:``inherit``,``use_custom_font``:false}" title_highlighted_typo="{``font_size``:````,``font_size_tablet``:````,``font_size_mobile``:````,``line_height``:````,``line_height_tablet``:````,``line_height_mobile``:````,``letter_spacing``:````,``letter_spacing_tablet``:````,``letter_spacing_mobile``:````,``color``:````,``weight``:``inherit``,``style``:``inherit``,``transform``:``inherit``,``decoration``:``inherit``,``use_custom_font``:false}"][/vc_column][/vc_row][vc_row][vc_column][vc_raw_html css=""]JTNDYm9keSUzRSUwQSUyMCUyMCUyMCUyMCUzQ2RpdiUyMGNsYXNzJTNEJTIyY29udGFpbmVyJTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTIxLS0lMjBWaXN1YWxseSUyMGludGVyZXN0aW5nJTIwcHJlc2VudGF0aW9uJTIwb2YlMjB0aGUlMjBpbnRybyUyMHBhcmFncmFwaCUyMC0tJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJrZXktcG9pbnRzJTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJrZXktcG9pbnQlMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NkaXYlMjBjbGFzcyUzRCUyMmtleS1wb2ludC10aXRsZSUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ3N2ZyUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTIwd2lkdGglM0QlMjIyNCUyMiUyMGhlaWdodCUzRCUyMjI0JTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwMjQlMjAyNCUyMiUyMGZpbGwlM0QlMjJub25lJTIyJTIwc3Ryb2tlJTNEJTIyY3VycmVudENvbG9yJTIyJTIwc3Ryb2tlLXdpZHRoJTNEJTIyMiUyMiUyMHN0cm9rZS1saW5lY2FwJTNEJTIycm91bmQlMjIlMjBzdHJva2UtbGluZWpvaW4lM0QlMjJyb3VuZCUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ2NpcmNsZSUyMGN4JTNEJTIyMTIlMjIlMjBjeSUzRCUyMjEyJTIyJTIwciUzRCUyMjEwJTIyJTNFJTNDJTJGY2lyY2xlJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbGluZSUyMHgxJTNEJTIyMTIlMjIlMjB5MSUzRCUyMjglMjIlMjB4MiUzRCUyMjEyJTIyJTIweTIlM0QlMjIxMiUyMiUzRSUzQyUyRmxpbmUlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NsaW5lJTIweDElM0QlMjIxMiUyMiUyMHkxJTNEJTIyMTYlMjIlMjB4MiUzRCUyMjEyLjAxJTIyJTIweTIlM0QlMjIxNiUyMiUzRSUzQyUyRmxpbmUlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZzdmclM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBUaGUlMjBDaGFsbGVuZ2UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZkaXYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NwJTNFTW9zdCUyMG9yZ2FuaXphdGlvbnMlMjBzdHJ1Z2dsZSUyMHRvJTIwdW5sb2NrJTIwQUklMjdzJTIwcG90ZW50aWFsJTIwZHVlJTIwdG8lMjBsYWNrJTIwb2YlMjBleHBlcnRpc2UuJTNDJTJGcCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQyUyRmRpdiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ2RpdiUyMGNsYXNzJTNEJTIya2V5LXBvaW50JTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJrZXktcG9pbnQtdGl0bGUlMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NzdmclMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUyMHdpZHRoJTNEJTIyMjQlMjIlMjBoZWlnaHQlM0QlMjIyNCUyMiUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDI0JTIwMjQlMjIlMjBmaWxsJTNEJTIybm9uZSUyMiUyMHN0cm9rZSUzRCUyMmN1cnJlbnRDb2xvciUyMiUyMHN0cm9rZS13aWR0aCUzRCUyMjIlMjIlMjBzdHJva2UtbGluZWNhcCUzRCUyMnJvdW5kJTIyJTIwc3Ryb2tlLWxpbmVqb2luJTNEJTIycm91bmQlMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NwYXRoJTIwZCUzRCUyMk0yMiUyMDEyaC00bC0zJTIwOUw5JTIwM2wtMyUyMDlIMiUyMiUzRSUzQyUyRnBhdGglM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZzdmclM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBPcGVyYXRpb25hbCUyMEV4Y2VsbGVuY2UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZkaXYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NwJTNFQUklMjBsaXRlcmFjeSUyMGhlbHBzJTIwc3RyZWFtbGluZSUyMG9wZXJhdGlvbnMlMjBhbmQlMjBpbm5vdmF0ZSUyMGZhc3Rlci4lM0MlMkZwJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGZGl2JTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJrZXktcG9pbnQlMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NkaXYlMjBjbGFzcyUzRCUyMmtleS1wb2ludC10aXRsZSUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ3N2ZyUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTIwd2lkdGglM0QlMjIyNCUyMiUyMGhlaWdodCUzRCUyMjI0JTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwMjQlMjAyNCUyMiUyMGZpbGwlM0QlMjJub25lJTIyJTIwc3Ryb2tlJTNEJTIyY3VycmVudENvbG9yJTIyJTIwc3Ryb2tlLXdpZHRoJTNEJTIyMiUyMiUyMHN0cm9rZS1saW5lY2FwJTNEJTIycm91bmQlMjIlMjBzdHJva2UtbGluZWpvaW4lM0QlMjJyb3VuZCUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ3BhdGglMjBkJTNEJTIyTTIwJTIwMjF2LTJhNCUyMDQlMjAwJTIwMCUyMDAtNC00SDhhNCUyMDQlMjAwJTIwMCUyMDAtNCUyMDR2MiUyMiUzRSUzQyUyRnBhdGglM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NjaXJjbGUlMjBjeCUzRCUyMjEyJTIyJTIwY3klM0QlMjI3JTIyJTIwciUzRCUyMjQlMjIlM0UlM0MlMkZjaXJjbGUlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZzdmclM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBDb21wZXRpdGl2ZSUyMEFkdmFudGFnZSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQyUyRmRpdiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ3AlM0VDb21wYW5pZXMlMjB3aG9zZSUyMHRlYW1zJTIwbWFzdGVyJTIwQUklMjBjYXBhYmlsaXRpZXMlMjBvdXRwZXJmb3JtJTIwdGhlaXIlMjBjb21wZXRpdG9ycy4lM0MlMkZwJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGZGl2JTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGZGl2JTNFJTBBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJjb250ZW50LXNlY3Rpb24lMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NoMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ3N2ZyUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTIwd2lkdGglM0QlMjIyOCUyMiUyMGhlaWdodCUzRCUyMjI4JTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwMjQlMjAyNCUyMiUyMGZpbGwlM0QlMjJub25lJTIyJTIwc3Ryb2tlJTNEJTIyY3VycmVudENvbG9yJTIyJTIwc3Ryb2tlLXdpZHRoJTNEJTIyMiUyMiUyMHN0cm9rZS1saW5lY2FwJTNEJTIycm91bmQlMjIlMjBzdHJva2UtbGluZWpvaW4lM0QlMjJyb3VuZCUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ3BhdGglMjBkJTNEJTIyTTEyJTIwMkwyJTIwN2wxMCUyMDUlMjAxMC01LTEwLTV6JTIyJTNFJTNDJTJGcGF0aCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ3BhdGglMjBkJTNEJTIyTTIlMjAxN2wxMCUyMDUlMjAxMC01JTIyJTNFJTNDJTJGcGF0aCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ3BhdGglMjBkJTNEJTIyTTIlMjAxMmwxMCUyMDUlMjAxMC01JTIyJTNFJTNDJTJGcGF0aCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQyUyRnN2ZyUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMFdoeSUyMFlvdXIlMjBUZWFtJTIwTmVlZHMlMjBBSSUyME1hc3RlcnklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZoMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ2RpdiUyMGNsYXNzJTNEJTIyYm94ZWQtY29udGVudCUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ3AlM0VUb2RheSUyN3MlMjBidXNpbmVzcyUyMHN1Y2Nlc3MlMjBkZXBlbmRzJTIwb24lMjBob3clMjBlZmZlY3RpdmVseSUyMHlvdXIlMjB0ZWFtcyUyMGNhbiUyMGxldmVyYWdlJTIwQUkuJTIwV2hpbGUlMjBiYXNpYyUyMEFJJTIwdG9vbHMlMjBhcmUlMjBiZWNvbWluZyUyMGNvbW1vbiUyQyUyMHRoZSUyMHJlYWwlMjBjb21wZXRpdGl2ZSUyMGFkdmFudGFnZSUyMGNvbWVzJTIwZnJvbSUyMHVuZGVyc3RhbmRpbmclMjBob3clMjB0byUyMHVzZSUyMEFJJTIwc3RyYXRlZ2ljYWxseS4lMjBUZWFtcyUyMHRoYXQlMjB0cnVseSUyMGdyYXNwJTIwQUklMjdzJTIwY2FwYWJpbGl0aWVzJTIwZG9uJTI3dCUyMGp1c3QlMjB3b3JrJTIwZmFzdGVyJTIwJUUyJTgwJTkzJTIwdGhleSUyMHRyYW5zZm9ybSUyMGVudGlyZSUyMHdvcmtmbG93cyUyQyUyMHNwb3QlMjBuZXclMjBvcHBvcnR1bml0aWVzJTJDJTIwYW5kJTIwc29sdmUlMjBwcm9ibGVtcyUyMGluJTIwd2F5cyUyMHRoYXQlMjB3ZXJlbiUyN3QlMjBwb3NzaWJsZSUyMGJlZm9yZS4lM0MlMkZwJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGZGl2JTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGZGl2JTNFJTBBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJjb250ZW50LXNlY3Rpb24lMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NoMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ3N2ZyUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTIwd2lkdGglM0QlMjIyOCUyMiUyMGhlaWdodCUzRCUyMjI4JTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwMjQlMjAyNCUyMiUyMGZpbGwlM0QlMjJub25lJTIyJTIwc3Ryb2tlJTNEJTIyY3VycmVudENvbG9yJTIyJTIwc3Ryb2tlLXdpZHRoJTNEJTIyMiUyMiUyMHN0cm9rZS1saW5lY2FwJTNEJTIycm91bmQlMjIlMjBzdHJva2UtbGluZWpvaW4lM0QlMjJyb3VuZCUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ2NpcmNsZSUyMGN4JTNEJTIyMTIlMjIlMjBjeSUzRCUyMjEyJTIyJTIwciUzRCUyMjEwJTIyJTNFJTNDJTJGY2lyY2xlJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbGluZSUyMHgxJTNEJTIyMiUyMiUyMHkxJTNEJTIyMTIlMjIlMjB4MiUzRCUyMjIyJTIyJTIweTIlM0QlMjIxMiUyMiUzRSUzQyUyRmxpbmUlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NwYXRoJTIwZCUzRCUyMk0xMiUyMDJhMTUuMyUyMDE1LjMlMjAwJTIwMCUyMDElMjA0JTIwMTAlMjAxNS4zJTIwMTUuMyUyMDAlMjAwJTIwMS00JTIwMTAlMjAxNS4zJTIwMTUuMyUyMDAlMjAwJTIwMS00LTEwJTIwMTUuMyUyMDE1LjMlMjAwJTIwMCUyMDElMjA0LTEweiUyMiUzRSUzQyUyRnBhdGglM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZzdmclM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBXZSUyMEJ1aWxkJTIwQUktQ2FwYWJsZSUyMFRlYW1zJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGaDIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NwJTNFQUklMjBIZXJvZXMlMjBzcGVjaWFsaXplcyUyMGluJTIwdHVybmluZyUyMHRlYW1zJTIwaW50byUyMEFJJTIwZXhwZXJ0cy4lMjBPdXIlMjB0cmFpbmluZyUyMHByb2dyYW1zJTIwaGF2ZSUyMGhlbHBlZCUyMGdsb2JhbCUyMGNvbXBhbmllcyUyMGFjcm9zcyUyMGluZHVzdHJpZXMlMjBidWlsZCUyMGludGVybmFsJTIwQUklMjBjYXBhYmlsaXRpZXMlMjB0aGF0JTIwZHJpdmUlMjByZWFsJTIwYnVzaW5lc3MlMjByZXN1bHRzLiUyMFdlJTIwZG9uJTI3dCUyMGp1c3QlMjB0ZWFjaCUyMHRoZW9yeSUyMCVFMiU4MCU5MyUyMHdlJTIwc2hvdyUyMHlvdXIlMjB0ZWFtcyUyMGhvdyUyMHRvJTIwYXBwbHklMjBBSSUyMHRvJTIwdGhlaXIlMjBzcGVjaWZpYyUyMGNoYWxsZW5nZXMlMjBhbmQlMjBvcHBvcnR1bml0aWVzLiUzQyUyRnAlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NkaXYlMjBjbGFzcyUzRCUyMnRlc3RpbW9uaWFsJTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJxdW90ZS1tYXJrJTIyJTNFJTIyJTNDJTJGZGl2JTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDcCUzRUFzJTIwYW4lMjBvcmdhbml6YXRpb24lMkMlMjB3ZSUyMHNhdyUyMHRoYXQlMjBBSSUyMHdhcyUyMGJlY29taW5nJTIwYW4lMjBpbmNyZWFzaW5nbHklMjBpbXBvcnRhbnQlMjBwYXJ0JTIwb2YlMjBzb2NpZXR5LiUyMFdlJTIwd2FudGVkJTIwdG8lMjBzdGF5JTIwYWhlYWQlMjBvZiUyMHRoaXMlMjBkZXZlbG9wbWVudCUyMGJ5JTIwdHJhaW5pbmclMjBvdXIlMjB0ZWFtJTIwb24lMjBBSSUyMGFuZCUyMGxldmVyYWdpbmclMjBpdHMlMjBwb3NzaWJpbGl0aWVzLiUyMEZyYW5zJTIwSG9vcm4lMjBnYXZlJTIwdXMlMjBhJTIwZmFudGFzdGljJTIwd29ya3Nob3AlMjB3aGVyZSUyMHdlJTIwd29ya2VkJTIwd2l0aCUyMGJvdGglMjB0aGVvcnklMjBhbmQlMjBwcmFjdGljZS4lMjBTaW5jZSUyMHRoZSUyMHdvcmtzaG9wJTJDJTIwd2UlMjBoYXZlJTIwdGhlJTIwdG9vbHMlMjB0byUyMG1ha2UlMjBBSSUyMG1hbmFnZWFibGUlMjBhbmQlMjBhcHBsaWNhYmxlLiUyMFdlJTIwY2FuJTIwcmVjb21tZW5kJTIwdGhlJTIwd29ya3Nob3AlMjB0byUyMGV2ZXJ5b25lJTIxJTNDJTJGcCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ2RpdiUyMGNsYXNzJTNEJTIydGVzdGltb25pYWwtYXV0aG9yJTIyJTNFJUYwJTlEJTk3JUExJUYwJTlEJTk3JUFFJUYwJTlEJTk4JTgxJUYwJTlEJTk3JUI2JUYwJTlEJTk3JUJDJUYwJTlEJTk3JUJCJUYwJTlEJTk3JUFFJUYwJTlEJTk3JUI5JUYwJTlEJTk3JUIyJTIwJUYwJTlEJTk3JUEzJUYwJTlEJTk3JUJDJUYwJTlEJTk4JTgwJUYwJTlEJTk4JTgxJUYwJTlEJTk3JUIwJUYwJTlEJTk3JUJDJUYwJTlEJTk3JUIxJUYwJTlEJTk3JUIyJTIwJUYwJTlEJTk3JTlGJUYwJTlEJTk3JUJDJUYwJTlEJTk4JTgxJUYwJTlEJTk3JUIyJUYwJTlEJTk3JUJGJUYwJTlEJTk3JUI2JUYwJTlEJTk3JUI3JTNDJTJGZGl2JTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGZGl2JTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGZGl2JTNFJTBBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJjb250ZW50LXNlY3Rpb24lMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NoMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ3N2ZyUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTIwd2lkdGglM0QlMjIyOCUyMiUyMGhlaWdodCUzRCUyMjI4JTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwMjQlMjAyNCUyMiUyMGZpbGwlM0QlMjJub25lJTIyJTIwc3Ryb2tlJTNEJTIyY3VycmVudENvbG9yJTIyJTIwc3Ryb2tlLXdpZHRoJTNEJTIyMiUyMiUyMHN0cm9rZS1saW5lY2FwJTNEJTIycm91bmQlMjIlMjBzdHJva2UtbGluZWpvaW4lM0QlMjJyb3VuZCUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ3BhdGglMjBkJTNEJTIyTTMlMjAzaDE4djE4SDN6TTEyJTIwOHY4JTIyJTNFJTNDJTJGcGF0aCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ3BhdGglMjBkJTNEJTIyTTglMjAxMmg4JTIyJTNFJTNDJTJGcGF0aCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQyUyRnN2ZyUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyME91ciUyMFNlcnZpY2VzJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGaDIlM0UlMEElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NkaXYlMjBjbGFzcyUzRCUyMndoaXRlLWxpbmUlMjIlM0UlM0MlMkZkaXYlM0UlMEElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NkaXYlMjBjbGFzcyUzRCUyMnNlcnZpY2VzJTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJzZXJ2aWNlLWNhcmQlMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NoMyUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ3N2ZyUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTIwd2lkdGglM0QlMjIyNCUyMiUyMGhlaWdodCUzRCUyMjI0JTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwMjQlMjAyNCUyMiUyMGZpbGwlM0QlMjJub25lJTIyJTIwc3Ryb2tlJTNEJTIyY3VycmVudENvbG9yJTIyJTIwc3Ryb2tlLXdpZHRoJTNEJTIyMiUyMiUyMHN0cm9rZS1saW5lY2FwJTNEJTIycm91bmQlMjIlMjBzdHJva2UtbGluZWpvaW4lM0QlMjJyb3VuZCUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ3JlY3QlMjB4JTNEJTIyMiUyMiUyMHklM0QlMjIzJTIyJTIwd2lkdGglM0QlMjIyMCUyMiUyMGhlaWdodCUzRCUyMjE0JTIyJTIwcnglM0QlMjIyJTIyJTIwcnklM0QlMjIyJTIyJTNFJTNDJTJGcmVjdCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ2xpbmUlMjB4MSUzRCUyMjglMjIlMjB5MSUzRCUyMjIxJTIyJTIweDIlM0QlMjIxNiUyMiUyMHkyJTNEJTIyMjElMjIlM0UlM0MlMkZsaW5lJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbGluZSUyMHgxJTNEJTIyMTIlMjIlMjB5MSUzRCUyMjE3JTIyJTIweDIlM0QlMjIxMiUyMiUyMHkyJTNEJTIyMjElMjIlM0UlM0MlMkZsaW5lJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGc3ZnJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwVGFpbG9yLU1hZGUlMjBXb3Jrc2hvcHMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZoMyUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ3AlM0VPdXIlMjBpbnRlbnNpdmUlMkMlMjBoYW5kcy1vbiUyMHdvcmtzaG9wcyUyMGFyZSUyMGN1c3RvbWl6ZWQlMjB0byUyMHlvdXIlMjBpbmR1c3RyeSUyMGFuZCUyMGNoYWxsZW5nZXMuJTIwV2UlMjB3b3JrJTIwZGlyZWN0bHklMjB3aXRoJTIweW91ciUyMHRlYW1zJTIwdXNpbmclMjByZWFsLXdvcmxkJTIwZXhhbXBsZXMlMjBmcm9tJTIweW91ciUyMGJ1c2luZXNzJTJDJTIwZW5zdXJpbmclMjB0aGV5JTIwY2FuJTIwYXBwbHklMjBBSSUyMGNhcGFiaWxpdGllcyUyMGltbWVkaWF0ZWx5JTIwdG8lMjB0aGVpciUyMHdvcmsuJTNDJTJGcCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ2RpdiUyMGNsYXNzJTNEJTIycHJpY2UlMjIlM0VTdGFydGluZyUyMGF0JTIwJUUyJTgyJUFDMiUyQzQwMCUyMGZvciUyMHR3byUyMHNlc3Npb25zJTNDJTJGZGl2JTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDcCUzRVRoZXNlJTIwaW50ZXJhY3RpdmUlMjBzZXNzaW9ucyUyMGRlbGl2ZXIlMjBpbW1lZGlhdGUlMjB2YWx1ZSUyMHRocm91Z2glM0ElM0MlMkZwJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDdWwlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NsaSUzRUN1c3RvbSUyMGNvbnRlbnQlMjBmb2N1c2VkJTIwb24lMjB5b3VyJTIwaW5kdXN0cnklMjBjaGFsbGVuZ2VzJTNDJTJGbGklM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NsaSUzRUhhbmRzLW9uJTIwcHJhY3RpY2UlMjB3aXRoJTIwcmVhbCUyMGJ1c2luZXNzJTIwc2NlbmFyaW9zJTNDJTJGbGklM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NsaSUzRUltbWVkaWF0ZSUyMGFwcGxpY2F0aW9uJTIwdG8lMjBjdXJyZW50JTIwcHJvamVjdHMlM0MlMkZsaSUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ2xpJTNFRXhwZXJ0JTIwZ3VpZGFuY2UlMjBmcm9tJTIwZXhwZXJpZW5jZWQlMjBBSSUyMHByYWN0aXRpb25lcnMlM0MlMkZsaSUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQyUyRnVsJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGZGl2JTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDZGl2JTIwY2xhc3MlM0QlMjJzZXJ2aWNlLWNhcmQlMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NoMyUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ3N2ZyUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTIwd2lkdGglM0QlMjIyNCUyMiUyMGhlaWdodCUzRCUyMjI0JTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwMjQlMjAyNCUyMiUyMGZpbGwlM0QlMjJub25lJTIyJTIwc3Ryb2tlJTNEJTIyY3VycmVudENvbG9yJTIyJTIwc3Ryb2tlLXdpZHRoJTNEJTIyMiUyMiUyMHN0cm9rZS1saW5lY2FwJTNEJTIycm91bmQlMjIlMjBzdHJva2UtbGluZWpvaW4lM0QlMjJyb3VuZCUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ3BhdGglMjBkJTNEJTIyTTIyJTIwMTEuMDhWMTJhMTAlMjAxMCUyMDAlMjAxJTIwMS01LjkzLTkuMTQlMjIlM0UlM0MlMkZwYXRoJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDcG9seWxpbmUlMjBwb2ludHMlM0QlMjIyMiUyMDQlMjAxMiUyMDE0LjAxJTIwOSUyMDExLjAxJTIyJTNFJTNDJTJGcG9seWxpbmUlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZzdmclM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBTcGVjaWFsaXplZCUyMENlcnRpZmljYXRlJTIwQ291cnNlcyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQyUyRmgzJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDcCUzRUZvciUyMHRlYW1zJTIwbmVlZGluZyUyMGRlZXAlMjBleHBlcnRpc2UlMjBpbiUyMHNwZWNpZmljJTIwQUklMjBza2lsbHMlMkMlMjBvdXIlMjBjZXJ0aWZpZWQlMjBjb3Vyc2VzJTIwcHJvdmlkZSUyMGNvbXByZWhlbnNpdmUlMjB0cmFpbmluZy4lMjBMZWQlMjBieSUyMG91ciUyMGV4cGVydCUyMGluc3RydWN0b3IlMjBEYXZpZCUyQyUyMHRoZXNlJTIwcHJvZ3JhbXMlMjBjb21iaW5lJTIwdGhlb3JldGljYWwlMjBrbm93bGVkZ2UlMjB3aXRoJTIwcHJhY3RpY2FsJTIwYXBwbGljYXRpb24uJTNDJTJGcCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ2RpdiUyMGNsYXNzJTNEJTIycHJpY2UlMjIlM0UlRTIlODIlQUM5OTklMjBwZXIlMjBwZXJzb24lM0MlMkZkaXYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NwJTNFUGFydGljaXBhbnRzJTIwZ2FpbiUzQSUzQyUyRnAlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0N1bCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ2xpJTNFSW4tZGVwdGglMjBtYXN0ZXJ5JTIwb2YlMjBjcnVjaWFsJTIwQUklMjBza2lsbHMlM0MlMkZsaSUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ2xpJTNFUmVndWxhciUyMHVwZGF0ZXMlMjByZWZsZWN0aW5nJTIwbGF0ZXN0JTIwQUklMjBkZXZlbG9wbWVudHMlM0MlMkZsaSUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ2xpJTNFUHJhY3RpY2FsJTIwYXNzaWdubWVudHMlMjBiYXNlZCUyMG9uJTIwcmVhbCUyMGJ1c2luZXNzJTIwY2FzZXMlM0MlMkZsaSUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ2xpJTNFRGlyZWN0JTIwYWNjZXNzJTIwdG8lMjBleHBlcnQlMjBpbnN0cnVjdGlvbiUzQyUyRmxpJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGdWwlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZkaXYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZkaXYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZkaXYlM0UlMEElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NkaXYlMjBjbGFzcyUzRCUyMndoaXRlLWxpbmUlMjIlM0UlM0MlMkZkaXYlM0UlMEElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NkaXYlMjBjbGFzcyUzRCUyMmNvbnRlbnQtc2VjdGlvbiUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ2gyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB3aWR0aCUzRCUyMjI4JTIyJTIwaGVpZ2h0JTNEJTIyMjglMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjAyNCUyMDI0JTIyJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjBzdHJva2UlM0QlMjJjdXJyZW50Q29sb3IlMjIlMjBzdHJva2Utd2lkdGglM0QlMjIyJTIyJTIwc3Ryb2tlLWxpbmVjYXAlM0QlMjJyb3VuZCUyMiUyMHN0cm9rZS1saW5lam9pbiUzRCUyMnJvdW5kJTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDcGF0aCUyMGQlM0QlMjJNMjAlMjAxNC42NlYyMGEyJTIwMiUyMDAlMjAwJTIwMS0yJTIwMkg0YTIlMjAyJTIwMCUyMDAlMjAxLTItMlY2YTIlMjAyJTIwMCUyMDAlMjAxJTIwMi0yaDUuMzQlMjIlM0UlM0MlMkZwYXRoJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDcG9seWdvbiUyMHBvaW50cyUzRCUyMjE4JTIwMiUyMDIyJTIwNiUyMDEyJTIwMTYlMjA4JTIwMTYlMjA4JTIwMTIlMjAxOCUyMDIlMjIlM0UlM0MlMkZwb2x5Z29uJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGc3ZnJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwQWJvdXQlMjBBSSUyMEhlcm9lcyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQyUyRmgyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDcCUzRUZvdW5kZWQlMjBpbiUyMDIwMTklMkMlMjBBSSUyMEhlcm9lcyUyMGlzJTIwYSUyMHZpYnJhbnQlMjB0ZWFtJTIwb2YlMjBpbm5vdmF0b3JzJTIwYW5kJTIwaW5kdXN0cnklMjBleHBlcnRzJTIwZGVkaWNhdGVkJTIwdG8lMjBoZWxwaW5nJTIwYnVzaW5lc3NlcyUyMHR1cm4lMjBBSSUyMGludG8lMjB0aGVpciUyMHVuZmFpciUyMGFkdmFudGFnZS4lMjBPdXIlMjBtaXNzaW9uJTIwaXMlMjB0byUyMHRyYW5zZm9ybSUyMG9yZ2FuaXphdGlvbnMlMjBieSUyMGltcGxlbWVudGluZyUyMGlubm92YXRpdmUlMjBBSSUyMHNvbHV0aW9ucyUyMHRoYXQlMjBkcml2ZSUyMGVmZmljaWVuY3klMkMlMjBpbmNyZWFzZSUyMHByb2ZpdGFiaWxpdHklMkMlMjBhbmQlMjBjcmVhdGUlMjBzdXN0YWluYWJsZSUyMGNvbXBldGl0aXZlJTIwZWRnZXMuJTNDJTJGcCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ2RpdiUyMGNsYXNzJTNEJTIyYWJvdXQtaGlnaGxpZ2h0JTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwV2UlMjBiZWxpZXZlJTIwdGhhdCUyMG5vJTIwYnVzaW5lc3MlMjBzaG91bGQlMjBtaXNzJTIwb3V0JTIwb24lMjB0aGUlMjBhZHZhbnRhZ2VzJTIwdGhhdCUyMEFJJTIwY2FuJTIwb2ZmZXIuJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGZGl2JTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDcCUzRU91ciUyMGFwcHJvYWNoJTIwaXMlMjBjZW50ZXJlZCUyMGFyb3VuZCUyMGd1aWRpbmclMjB5b3UlMjB0aHJvdWdoJTIwZXZlcnklMjBzdGVwJTIwb2YlMjB5b3VyJTIwQUklMjBqb3VybmV5JUUyJTgwJTk0ZnJvbSUyMGlkZW50aWZ5aW5nJTIwb3Bwb3J0dW5pdGllcyUyMHRvJTIwZGVwbG95aW5nJTIwdGFpbG9yZWQlMjBzb2x1dGlvbnMlMjB0aGF0JTIwZml0JTIweW91ciUyMHVuaXF1ZSUyMG5lZWRzLiUzQyUyRnAlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NwJTNFV2hldGhlciUyMHlvdSUyN3JlJTIwYSUyMHN0YXJ0dXAlMjBsb29raW5nJTIwdG8lMjBtYWtlJTIweW91ciUyMG1hcmslMjBvciUyMGFuJTIwZXN0YWJsaXNoZWQlMjBlbnRlcnByaXNlJTIwYWltaW5nJTIwdG8lMjBpbm5vdmF0ZSUyQyUyMG91ciUyMGZ1bGwtc3RhY2slMjBkZXZlbG9wbWVudCUyMHNlcnZpY2VzJTIwZW5zdXJlJTIwdGhhdCUyMHlvdXIlMjBBSSUyMHNvbHV0aW9ucyUyMGFyZSUyMHNjYWxhYmxlJTIwYW5kJTIwZWZmZWN0aXZlLiUyMFRvZ2V0aGVyJTJDJTIwd2UlMjBjYW4lMjB0dXJuJTIweW91ciUyMGNoYWxsZW5nZXMlMjBpbnRvJTIweW91ciUyMGNvbXBldGl0aXZlJTIwYWR2YW50YWdlLiUzQyUyRnAlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZkaXYlM0UlMEElMjAlMjAlMjAlMjAlM0MlMkZkaXYlM0UlMEElM0MlMkZib2R5JTNF[/vc_raw_html][/vc_column][/vc_row][vc_row full_width="stretch_row" content_placement="top" side_background_title_typo="null" css=".vc_custom_1720687306685{padding-top: 90px !important;padding-bottom: 70px !important;background-color: rgba(10,10,10,0.05) !important;*background-color: rgb(10,10,10) !important;}" title_typo="null"][vc_column width="1/4"][vc_single_image image="243007" img_size="medium" alignment="right" style="vc_box_rounded" css=""][ohio_button layout="fill" shape_position="right" border_radius="0" drop_shadow="1" drop_shadow_intensity="25" icon_use="1" button_type_layout="fill" button_position="center" button_title="url:%23|title:Default%20Button|target:_blank" button_title_typography="null" link="url:mailto%3Adavid%40aiheroes.io|title:Schedule%20a%20Meeting|target:_blank" title_typo="null" title_typo_hover="null" color="#f45050" icon_as_icon="ion ion-md-calendar"][/vc_column][vc_column width="3/4"][ohio_text text_typo="{``font_size``:````,``line_height``:````,``letter_spacing``:````,``color``:````,``weight``:``inherit``,``style``:``inherit``,``use_custom_font``:false}"]<br />
Connect with David to learn more about our all of our AI training options.<br />
[/ohio_text][ohio_contact_form form_style="flat" form_position="left" form_id="245261" input_placeholder_typo="null" input_text_typo="null" button="type=default&amp;size=default" content_styles=".vc_custom_1721298229236{padding-left: 16.4px !important;}"][/vc_column][/vc_row]</p>
