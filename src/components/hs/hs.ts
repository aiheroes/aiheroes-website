// Helpers for the house-style experiment (/nl/experiment/huisstijl).

/**
 * The icon set: IconPark (ByteDance, Apache 2.0, iconpark.oceanengine.com), Outline theme. Paths
 * from its source SVGs on the 48 grid; paint, stroke 4, square ends and mitred joins come from CSS
 * (.hs-icon). Each path draws itself (pathLength=1).
 */
export const ICONS = {
  'arrow-right': ['M41.9999 24H5.99994', 'M30 12L42 24L30 36'],
  'arrow-up-right': ['M19 11H37V29', 'M11.5439 36.4559L36.9997 11'],
  pause: ['M16 12V36', 'M32 12V36'],
  play: ['M15 24V11.8756L25.5 17.9378L36 24L25.5 30.0622L15 36.1244V24Z'],
  menu: ['M7.94971 11.9497H39.9497', 'M7.94971 23.9497H39.9497', 'M7.94971 35.9497H39.9497'],
  close: ['M8 8L40 40', 'M8 40L40 8'],
  'chart-line': ['M6 6V42H42', 'M14 34L22 18L32 27L42 6'],
  protect: ['M6 9.25564L24.0086 4L42 9.25564V20.0337C42 31.3622 34.7502 41.4194 24.0026 45.0005C13.2521 41.4195 6 31.36 6 20.0287V9.25564Z', 'M15 23L22 30L34 18'],
  peoples: ['M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z', 'M32.6077 7C34.6405 8.2249 36.0001 10.4537 36.0001 13C36.0001 15.5463 34.6405 17.7751 32.6077 19', 'M4 40.8V42H34V40.8C34 36.3196 34 34.0794 33.1281 32.3681C32.3611 30.8628 31.1372 29.6389 29.6319 28.8719C27.9206 28 25.6804 28 21.2 28H16.8C12.3196 28 10.0794 28 8.36808 28.8719C6.86278 29.6389 5.63893 30.8628 4.87195 32.3681C4 34.0794 4 36.3196 4 40.8Z', 'M43.9999 42.0001V40.8001C43.9999 36.3197 43.9999 34.0795 43.128 32.3682C42.361 30.8629 41.1371 29.6391 39.6318 28.8721'],
  switch: ['M42 19H5.99998', 'M30 7L42 19', 'M6.79897 29H42.799', 'M6.79895 29L18.799 41'],
  // A filled square: the stop control of the chat assistant (IconPark has none at this weight).
  'stop': ['F:M14 14H34V34H14Z'],
  // Added for the relaunch (IconPark 1.4.2 es/icons, Outline). "F:" marks a filled shape, "FS:" filled and stroked.
  'agreement': ['M10 4H38A2 2 0 0 1 40 6V42A2 2 0 0 1 38 44H10A2 2 0 0 1 8 42V6A2 2 0 0 1 10 4Z','M16 4H25V20L20.5 16L16 20V4Z','M16 28H26','M16 34H32'],
  'aiming': ['M4 24A20 20 0 1 0 44 24A20 20 0 1 0 4 24Z','M24 37V44V37Z','M24 37V44','M36 24H44H36Z','M36 24H44','M4 24H11H4Z','M4 24H11','M24 11V4V11Z','M24 11V4'],
  'alarm-clock': ['M23.9998 44.3332C34.1251 44.3332 42.3332 36.1251 42.3332 25.9999C42.3332 15.8747 34.1251 7.66656 23.9998 7.66656C13.8746 7.66656 5.6665 15.8747 5.6665 25.9999C5.6665 36.1251 13.8746 44.3332 23.9998 44.3332Z','M23.7594 15.3536L23.7582 26.3624L31.5305 34.1347','M4 9.00001L11 4.00001','M44 9.00001L37 4.00001'],
  'analysis': ['M44 5H3.99998V17H44V5Z','M3.99998 41.0301L16.1756 28.7293L22.7549 35.0301L30.7982 27L35.2786 31.368','M44 16.1719V42.1719','M3.99998 16.1719V30.1719','M13.0155 43H44','M17 11H38','M9.99998 10.9966H11'],
  'api': ['M37 22.0001L34 25.0001L23 14.0001L26 11.0001C27.5 9.50002 33 7.00005 37 11.0001C41 15.0001 38.5 20.5 37 22.0001Z','M42 6L37 11','M11 25.9999L14 22.9999L25 33.9999L22 36.9999C20.5 38.5 15 41 11 36.9999C7 32.9999 9.5 27.5 11 25.9999Z','M23 32L27 28','M6 42L11 37','M16 25L20 21'],
  'bill': ['M10 6C10 4.89543 10.8954 4 12 4H36C37.1046 4 38 4.89543 38 6V44L31 39L24 44L17 39L10 44V6Z','M18 22L30 22','M18 30L30 30','M18 14L30 14'],
  'book': ['M8 40C8 36 8 10 8 10C8 6.68629 10.8654 4 14.4 4H40V36C40 36 19.9815 36 14.4 36C9.36225 36 8 36.6842 8 40Z','M12 44H40V36H12C9.79086 36 8 37.7909 8 40C8 42.2091 9.79086 44 12 44Z'],
  'bookmark': ['M10 44C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V42C40 43.1046 39.1046 44 38 44H10Z','M21 22V4H33V22L27 15.7273L21 22Z','M10 4H38'],
  'box': ['M8 12H40A2 2 0 0 1 42 14V40A2 2 0 0 1 40 42H8A2 2 0 0 1 6 40V14A2 2 0 0 1 8 12Z','M17.9497 24.0083L29.9497 24.0083','M6 13L13 5H35L42 13'],
  'brain': ['M19.036 44.0002C18.0561 40.8046 16.5778 38.4223 14.6011 36.8533C11.636 34.4998 6.92483 35.9625 5.18458 33.535C3.44433 31.1074 6.40382 26.6432 7.44234 24.0091C8.48086 21.3751 3.46179 20.4437 4.04776 19.6959C4.43842 19.1974 6.97471 17.7588 11.6567 15.3802C12.987 7.79356 17.9008 4.00024 26.3982 4.00024C39.1441 4.00024 44 14.8062 44 21.6791C44 28.5521 38.1201 35.9564 29.7441 37.5529C28.9951 38.6437 30.0754 40.7928 32.9848 44.0002','M19.4997 14.5001C18.8464 17.0344 19.0408 18.8139 20.0829 19.8386C21.125 20.8634 22.9011 21.5335 25.4112 21.849C24.8417 25.1177 25.5361 26.6512 27.4942 26.4494C29.4524 26.2476 30.6289 25.434 31.0239 24.0084C34.0842 24.8685 35.7428 24.1487 35.9997 21.849C36.3852 18.3994 34.525 15.6476 33.7624 15.6476C32.9997 15.6476 31.0239 15.5548 31.0239 14.5001C31.0239 13.4453 28.7159 12.8494 26.6329 12.8494C24.5499 12.8494 25.8035 11.4453 22.9432 12.0001C21.0363 12.3699 19.8885 13.2032 19.4997 14.5001Z','M30.5002 25.5002C29.4833 26.1313 28.0878 27.1805 27.5002 28.0002C26.0313 30.0497 24.8398 31.2976 24.5791 32.6083'],
  'calendar': ['M5 19H43V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V19Z','M5 9C5 7.89543 5.89543 7 7 7H41C42.1046 7 43 7.89543 43 9V19H5V9Z','M16 4V12','M32 4V12','M28 34H34','M14 34H20','M28 26H34','M14 26H20'],
  'certificate': ['M26 36H6C4.89543 36 4 35.1046 4 34V8C4 6.89543 4.89543 6 6 6H42C43.1046 6 44 6.89543 44 8V34C44 35.1046 43.1046 36 42 36H34','M12 14H36','M12 21H18','M12 28H16','M30 33C33.3137 33 36 30.3137 36 27C36 23.6863 33.3137 21 30 21C26.6863 21 24 23.6863 24 27C24 30.3137 26.6863 33 30 33Z','M30 40L34 42V31.4722C34 31.4722 32.8594 33 30 33C27.1406 33 26 31.5 26 31.5V42L30 40Z'],
  'chart-histogram': ['M6 6V42H42','M14 30V34','M22 22V34','M30 6V34','M38 14V34'],
  'check': ['M43 11L16.875 37L5 25.1818'],
  'checklist': ['M34 10L42 18','M42 10L34 18','M44 30L37 38L33 34','M26 10H4V18H26V10Z','M26 30H4V38H26V30Z'],
  'clipboard': ['M17 7H16H10C8.89543 7 8 7.89543 8 9L8 42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V9C40 7.89543 39.1046 7 38 7H33.0499H31','M17 4H31V10H17Z'],
  'cloud-storage': ['M44 29H4V42H44V29Z','F:M35.5 38C36.8807 38 38 36.8807 38 35.5C38 34.1193 36.8807 33 35.5 33C34.1193 33 33 34.1193 33 35.5C33 36.8807 34.1193 38 35.5 38Z','M4 28.9998L9.03837 4.99902H39.0205L44 28.9998','M19.006 16.0259C16.8635 16.0259 15 17.5124 15 19.5128C15 21.9998 17.0947 22.9998 19.6973 22.9998C20.1437 22.9998 20.5567 22.9998 20.9768 22.9998','M29.007 16.0259C31.1039 16.0259 33 16.9994 33 19.5128C33 21.9998 30.8902 22.9998 28.2877 22.9998C27.8412 22.9998 27.4013 22.9998 26.9871 22.9998','M29.0069 16.0261C29.0069 13.0423 27.0231 11 23.9998 11C20.9766 11 19.0059 12.9927 19.0059 16.0261','M20 23H28'],
  'code': ['M16 13L4 25.4322L16 37','M32 13L44 25.4322L32 37','M28 4L21 44'],
  'comments': ['M33 38H22V30H36V22H44V38H39L36 41L33 38Z','M4 6H36V30H17L13 34L9 30H4V6Z','M12 22H18','M12 14H24'],
  'computer': ['M19 32H29V41H19Z','M7 8H41A2 2 0 0 1 43 10V30A2 2 0 0 1 41 32H7A2 2 0 0 1 5 30V10A2 2 0 0 1 7 8Z','M22 27H26','M14 41L34 41'],
  'connection': ['M39 34L44 39L39 44','M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z','M12 8L20 8C22.2091 8 24 9.79086 24 12V35C24 37.2091 25.7909 39 28 39H44'],
  'cpu': ['M38 8H10C8.89543 8 8 8.89543 8 10V38C8 39.1046 8.89543 40 10 40H38C39.1046 40 40 39.1046 40 38V10C40 8.89543 39.1046 8 38 8Z','M30 18H18V30H30V18Z','M14.9092 2V8V2Z','M14.9092 2V8','M14.9092 40V46V40Z','M14.9092 40V46','M24 2V8V2Z','M24 2V8','M24 40V46V40Z','M24 40V46','M33.0908 2V8V2Z','M33.0908 2V8','M33.0908 40V46V40Z','M33.0908 40V46','M2 14.9092H8H2Z','M2 14.9092H8','M40 14.9092H46H40Z','M40 14.9092H46','M2 24H8H2Z','M2 24H8','M40 24H46H40Z','M40 24H46','M2 33.0908H8H2Z','M2 33.0908H8','M40 33.0908H46H40Z','M40 33.0908H46'],
  'customer': ['F:M8.60868 36.9866C5.32131 33.3783 3.32142 28.6145 3.32142 23.3913C3.32142 12.1271 12.6179 2.99561 24.0856 2.99561C35.5534 2.99561 44.8499 12.1271 44.8499 23.3913C44.8499 31.356 40.2004 38.2515 33.4234 41.6092C29.277 43.7709 24.5467 44.9956 19.5253 44.9956C13.3726 44.9956 7.6569 43.157 2.91699 40.0087C2.91699 40.0087 6.09557 39.662 8.60786 36.9874L8.60868 36.9866ZM33.8397 33.4854C39.2117 28.1136 39.2117 19.4041 33.8397 14.0322C31.3487 11.5413 28.1401 10.2062 24.8794 10.0255V10.0247C24.781 7.57827 26.0979 5.92609 26.1043 5.91803L26.103 5.91829L26.104 5.91699C22.3564 6.64093 18.7778 8.45398 15.8759 11.3559C13.6504 13.5813 12.0658 16.2048 11.1211 18.997C11.2594 18.6308 11.4136 18.2692 11.5837 17.9134C11.3879 18.4127 11.211 18.9229 11.051 19.4449C9.47775 24.2208 10.5882 29.6872 14.3864 33.4854C19.7584 38.8574 28.4679 38.8574 33.8397 33.4854Z','F:M17.1299 22.3449V24.0538V25.1921C17.1299 26.3283 18.0509 27.2493 19.1872 27.2493C20.3234 27.2493 21.2443 26.3283 21.2443 25.1921V24.0521V22.3449C21.2443 21.2089 20.3234 20.2876 19.1872 20.2876C18.0509 20.2876 17.1299 21.2089 17.1299 22.3449Z','F:M27.3125 22.3449V24.0538V25.1921C27.3125 26.3283 28.2336 27.2493 29.3697 27.2493C30.5059 27.2493 31.427 26.3283 31.427 25.1921V24.0521V22.3449C31.427 21.2089 30.5059 20.2876 29.3697 20.2876C28.2336 20.2876 27.3125 21.2089 27.3125 22.3449Z'],
  'data-server': ['M41 4H7C5.34315 4 4 5.34315 4 7V41C4 42.6569 5.34315 44 7 44H41C42.6569 44 44 42.6569 44 41V7C44 5.34315 42.6569 4 41 4Z','M4 32H44','M10 38H11','M26 38H38','M44 37V27','M4 37V27'],
  'document-folder': ['M32 6H22V42H32V6Z','M42 6H32V42H42V6Z','M10 6L18 7L14.5 42L6 41L10 6Z','M37 18V15','M27 18V15'],
  'download': ['M6 24.0083V42H42V24','M33 23L24 32L15 23','M23.9917 6V32'],
  'earth': ['M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z','M4 24H44','M24 44C28.4183 44 32 35.0457 32 24C32 12.9543 28.4183 4 24 4C19.5817 4 16 12.9543 16 24C16 35.0457 19.5817 44 24 44Z','M9.85791 10.1421C13.4772 13.7614 18.4772 16 24 16C29.5229 16 34.5229 13.7614 38.1422 10.1421','M38.1422 37.8579C34.5229 34.2386 29.5229 32 24 32C18.4772 32 13.4772 34.2386 9.85791 37.8579'],
  'efferent-four': ['M20 5L10 5C8.89543 5 8 5.89543 8 7L8 41C8 42.1046 8.89543 43 10 43L38 43C39.1046 43 40 42.1046 40 41L40 24.75','M28 5H40V17','M21.0001 23.9998L39 6'],
  'erase': ['M4 42H44','M31 4L7 28L13 34H21L41 14L31 4Z'],
  'every-user': ['M9 29A5 5 0 1 0 19 29A5 5 0 1 0 9 29Z','M29 29A5 5 0 1 0 39 29A5 5 0 1 0 29 29Z','M19 9A5 5 0 1 0 29 9A5 5 0 1 0 19 9Z','M24 44C24 38.4772 19.5228 34 14 34C8.47715 34 4 38.4772 4 44','M44 44C44 38.4772 39.5228 34 34 34C28.4772 34 24 38.4772 24 44','M34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24'],
  'exchange': ['M24 16H29V4L44 19L29 34V24H18V13L4 28L18 44V32H23'],
  'file-text': ['M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z','M30 4L40 14','M24 22V36','M18 22H24L30 22'],
  'folder': ['M7 6C7 4.89543 7.89543 4 9 4H39C40.1046 4 41 4.89543 41 6V42C41 43.1046 40.1046 44 39 44H9C7.89543 44 7 43.1046 7 42V6Z','M16 29H20','M16 35H26','M8 5C8 5 11.7647 18 24 18C36.2353 18 40 5 40 5','M20 18A4 4 0 1 0 28 18A4 4 0 1 0 20 18Z','M15 4H9C7.89543 4 7 4.89543 7 6V12','M33 4H39C40.1046 4 41 4.89543 41 6V12'],
  'funds': ['M4 10A10 5 0 1 0 24 10A10 5 0 1 0 4 10Z','M4 10C4 10 4 14.2386 4 17C4 19.7614 8.47715 22 14 22C19.5228 22 24 19.7614 24 17C24 15.3644 24 10 24 10','M4 17C4 17 4 21.2386 4 24C4 26.7614 8.47715 29 14 29C19.5228 29 24 26.7614 24 24C24 22.3644 24 17 24 17','M4 24C4 24 4 28.2386 4 31C4 33.7614 8.47715 36 14 36C19.5228 36 24 33.7614 24 31C24 29.3644 24 24 24 24','M4 31C4 31 4 35.2386 4 38C4 40.7614 8.47715 43 14 43C19.5228 43 24 40.7614 24 38C24 36.3644 24 31 24 31','M24 24A10 5 0 1 0 44 24A10 5 0 1 0 24 24Z','M24 24C24 24 24 28.2386 24 31C24 33.7614 28.4772 36 34 36C39.5228 36 44 33.7614 44 31C44 29.3644 44 24 44 24','M24 31C24 31 24 35.2386 24 38C24 40.7614 28.4772 43 34 43C39.5228 43 44 40.7614 44 38C44 36.3644 44 31 44 31'],
  'globe': ['M37.8261 4C41.6276 7.58886 44 12.6753 44 18.3158C44 29.1871 35.1871 38 24.3158 38C18.6753 38 13.5889 35.6276 10 31.8261','M24 32C31.732 32 38 25.732 38 18C38 10.268 31.732 4 24 4C16.268 4 10 10.268 10 18C10 25.732 16.268 32 24 32Z','M24 38V44','M18 44H30'],
  'headset': ['M42 30V24.4615C42 14.2655 33.9411 6 24 6C14.0589 6 6 14.2655 6 24.4615V30','M34 32C34 29.7909 35.7909 28 38 28H42V42H38C35.7909 42 34 40.2091 34 38V32Z','F:M42 32H44C45.1046 32 46 32.8954 46 34V36C46 37.1046 45.1046 38 44 38H42V32Z','F:M6 32H4C2.89543 32 2 32.8954 2 34V36C2 37.1046 2.89543 38 4 38H6V32Z','M6 28H10C12.2091 28 14 29.7909 14 32V38C14 40.2091 12.2091 42 10 42H6V28Z'],
  'home-two': ['M44 44V20L24 4L4 20L4 44H16V26H32V44H44Z','M24 44V34'],
  'hourglass': ['M8 4H40','M8 44H40','M12 4V16L21 26','M36 44V29.5L27 21','M12 44V30L18.5 23.5','M36 4V16L29.5 23.5','M18 33H19','M29.1465 32.6465L29.8536 33.3536','M24 38H25'],
  'lightning': ['M19 4H37L26 18H41L17 44L22 25H8L19 4Z'],
  'like': ['M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z'],
  'link': ['M24.7073 9.56521L9.85801 24.4145C6.34329 27.9292 6.34329 33.6277 9.85801 37.1424V37.1424C13.3727 40.6571 19.0712 40.6571 22.5859 37.1424L40.2636 19.4647C42.6067 17.1216 42.6067 13.3226 40.2636 10.9794V10.9794C37.9205 8.63628 34.1215 8.63628 31.7783 10.9794L14.1007 28.6571C12.9291 29.8287 12.9291 31.7282 14.1007 32.8997V32.8997C15.2722 34.0713 17.1717 34.0713 18.3433 32.8997L33.1925 18.0505'],
  'link-two': ['M30 19H20C15.5817 19 12 22.5817 12 27C12 31.4183 15.5817 35 20 35H36C40.4183 35 44 31.4183 44 27C44 24.9711 43.2447 23.1186 42 21.7084','M6 24.2916C4.75527 22.8814 4 21.0289 4 19C4 14.5817 7.58172 11 12 11H28C32.4183 11 36 14.5817 36 19C36 23.4183 32.4183 27 28 27H18'],
  'list-checkbox': ['M20 24H44H20Z','M20 24H44','M20 38H44H20Z','M20 38H44','M20 10H44H20Z','M20 10H44','M4 34H12V42H4Z','M4 20H12V28H4Z','M4 6H12V14H4Z'],
  'local': ['M9.85786 32.7574C6.23858 33.8432 4 35.3432 4 37C4 40.3137 12.9543 43 24 43C35.0457 43 44 40.3137 44 37C44 35.3432 41.7614 33.8432 38.1421 32.7574','M24 35C24 35 37 26.504 37 16.6818C37 9.67784 31.1797 4 24 4C16.8203 4 11 9.67784 11 16.6818C11 26.504 24 35 24 35Z','M24 22C26.7614 22 29 19.7614 29 17C29 14.2386 26.7614 12 24 12C21.2386 12 19 14.2386 19 17C19 19.7614 21.2386 22 24 22Z'],
  'lock': ['M8 22H40A2 2 0 0 1 42 24V42A2 2 0 0 1 40 44H8A2 2 0 0 1 6 42V24A2 2 0 0 1 8 22Z','M14 22V14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14V22','M24 30V36'],
  'mail': ['M4 39H44V24V9H24H4V24V39Z','M4 9L24 24L44 9','M24 9H4V24','M44 24V9H24'],
  'map-draw': ['M17 12L4 6V36L17 42L31 36L44 42V12L31 6L17 12Z','M31 6V36','M17 12V42','M10.5 9L17 12L31 6L37.5 9','M10.5 39L17 42L31 36L37.5 39'],
  'message': ['M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z','M14 18L32 18','M14 26H32','M14 34H24'],
  'microphone': ['M24 4H24A8 8 0 0 1 32 12V24A8 8 0 0 1 24 32H24A8 8 0 0 1 16 24V12A8 8 0 0 1 24 4Z','M10 21V24C10 31.732 16.268 38 24 38V38C31.732 38 38 31.732 38 24V21','M24 5V11','M16 16H21','M27 16H32','M16 22H21','M27 22H32','M24 38V44','M16 44H32'],
  'minus': ['M10.5 24L38.5 24'],
  'peoples-two': ['M24 20C27.866 20 31 16.866 31 13C31 9.13401 27.866 6 24 6C20.134 6 17 9.13401 17 13C17 16.866 20.134 20 24 20Z','M12 7.25488C10.1865 8.51983 9 10.6214 9 13.0002C9 15.5465 10.3596 17.7753 12.3924 19.0002','M36 7.25488C37.8135 8.51983 39 10.6214 39 13.0002C39 15.3789 37.8135 17.4806 36 18.7455','M12 40V42H36V40C36 36.2725 36 34.4087 35.391 32.9385C34.5791 30.9783 33.0217 29.4209 31.0615 28.609C29.5913 28 27.7275 28 24 28C20.2725 28 18.4087 28 16.9385 28.609C14.9783 29.4209 13.4209 30.9783 12.609 32.9385C12 34.4087 12 36.2725 12 40Z','M43.9999 42.0001V40.8001C43.9999 36.3197 43.9999 34.0795 43.128 32.3682C42.361 30.8629 41.1371 29.6391 39.6318 28.8721','M4.00009 42.0001V40.8001C4.00009 36.3197 4.00009 34.0795 4.87204 32.3682C5.63902 30.8629 6.86287 29.6391 8.36816 28.8721'],
  'phone': ['M8 30H40V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V30Z','M40 30V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V30','M22 37H26'],
  'plus': ['M24.0605 10L24.0239 38','M10 24L38 24'],
  'preview-open': ['M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z','M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z'],
  'puzzle': ['M4 24V12H13V10C13 6.68629 15.6863 4 19 4C22.3137 4 25 6.68629 25 10V12H34V24H38C41.3137 24 44 26.6863 44 30C44 33.3137 41.3137 36 38 36H34V44H4V36H8C11.3137 36 14 33.3137 14 30C14 26.6863 11.3137 24 8 24H4Z'],
  'refresh': ['M42 8V24','M6 24L6 40','M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519'],
  'repair': ['M17 14L29 14','M23 28L23 15','M20.1429 42H8C6.89543 42 6 41.1046 6 40V7C6 5.89543 6.89543 5 8 5H40C41.1046 5 42 5.89543 42 7V16.7167','M27 38L37.5 23.5L42 27L31 42H27V38Z'],
  'robot': ['M11 17H37A2 2 0 0 1 39 19V41A2 2 0 0 1 37 43H11A2 2 0 0 1 9 41V19A2 2 0 0 1 11 17Z','M33 9L28 17','M15 9L20 17','M32 7A2 2 0 1 0 36 7A2 2 0 1 0 32 7Z','M12 7A2 2 0 1 0 16 7A2 2 0 1 0 12 7Z','M20 24H28A4 4 0 0 1 32 28V28A4 4 0 0 1 28 32H20A4 4 0 0 1 16 28V28A4 4 0 0 1 20 24Z','M9 24H4V34H9','M39 24H44V34H39'],
  'rocket': ['M18.705 7.89449L24 4L29.295 7.89449C32.8819 10.5327 35 14.7198 35 19.1725V37H13V19.1725C13 14.7198 15.1181 10.5327 18.705 7.89449Z','M13 17L7 23V31L13 28V17Z','M35 17L41 23V31L35 28V17Z','M18 39V42','M24 39V44','M30 39V42'],
  'ruler': ['M44 14L34 4L30.25 7.75L26.5 11.5L19 19L11.5 26.5L7.75 30.25L4 34L14 44L44 14Z','M30.25 7.75L7.75 30.25','M9 29L13 33','M14 24L20 30','M19 19L23 23','M24 14L30 20','M29 9L33 13'],
  'search': ['M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z','M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431','M33.2216 33.2217L41.7069 41.707'],
  'server': ['M44 4H4V20H44V4Z','M44 28H4V44H44V28Z','F:M13 10H11C10.4477 10 10 10.4477 10 11V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V11C14 10.4477 13.5523 10 13 10Z','F:M13 34H11C10.4477 34 10 34.4477 10 35V37C10 37.5523 10.4477 38 11 38H13C13.5523 38 14 37.5523 14 37V35C14 34.4477 13.5523 34 13 34Z','F:M21 10H19C18.4477 10 18 10.4477 18 11V13C18 13.5523 18.4477 14 19 14H21C21.5523 14 22 13.5523 22 13V11C22 10.4477 21.5523 10 21 10Z','F:M21 34H19C18.4477 34 18 34.4477 18 35V37C18 37.5523 18.4477 38 19 38H21C21.5523 38 22 37.5523 22 37V35C22 34.4477 21.5523 34 21 34Z'],
  'shield': ['M6 8.25564L24.0086 3L42 8.25564V19.0337C42 30.3622 34.7502 40.4194 24.0026 44.0005C13.2521 40.4195 6 30.36 6 19.0287V8.25564Z'],
  'shop': ['M4 12H44V20L42.6015 20.8391C40.3847 22.1692 37.6153 22.1692 35.3985 20.8391L34 20L32.6015 20.8391C30.3847 22.1692 27.6153 22.1692 25.3985 20.8391L24 20L22.6015 20.8391C20.3847 22.1692 17.6153 22.1692 15.3985 20.8391L14 20L12.6015 20.8391C10.3847 22.1692 7.61531 22.1692 5.39853 20.8391L4 20V12Z','M8 22.4889V44H40V22','M8 11.8222V4H40V12','M19 32H29V44H19Z'],
  'shopping-bag': ['M5 17H43L38.8 43H9.2L5 17Z','M35 17C35 10.3726 30.0751 5 24 5C17.9249 5 13 10.3726 13 17','F:M15 26A2 2 0 1 0 19 26A2 2 0 1 0 15 26Z','M18 33C18 33 20 36 24 36C28 36 30 33 30 33','F:M29 26A2 2 0 1 0 33 26A2 2 0 1 0 29 26Z'],
  'smart-optimization': ['M24.0002 45C27.2208 45 32.7276 40.8 32.7276 24C32.7276 7.2 27.2208 3 24.0002 3C20.7797 3 15.2729 7.48302 15.2729 24C15.2729 40.517 20.7797 45 24.0002 45Z','M5.10515 35.0001C6.71545 37.8124 13.2479 40.4211 28.364 31.6211C43.48 22.8211 44.5057 15.8124 42.8954 13.0001C41.2851 10.1878 34.4981 7.72728 19.6367 16.3791C4.77521 25.0308 3.49489 32.1878 5.10515 35.0001Z','M5.10506 13.0001C3.4948 15.8124 4.52046 22.8211 19.6366 31.6211C34.7527 40.4211 41.285 37.8124 42.8953 35.0001C44.5056 32.1878 43.2253 25.0308 28.3638 16.3791C13.5024 7.72728 6.71537 10.1878 5.10506 13.0001Z'],
  'speaker': ['M38 2H10C8.89543 2 8 2.89543 8 4V44C8 45.1046 8.89543 46 10 46H38C39.1046 46 40 45.1046 40 44V4C40 2.89543 39.1046 2 38 2Z','M24 38C27.3137 38 30 35.3137 30 32C30 28.6863 27.3137 26 24 26C20.6863 26 18 28.6863 18 32C18 35.3137 20.6863 38 24 38Z','M24 18C26.2091 18 28 16.2091 28 14C28 11.7909 26.2091 10 24 10C21.7909 10 20 11.7909 20 14C20 16.2091 21.7909 18 24 18Z'],
  'star': ['M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z'],
  'stopwatch': ['M24 44C33.3888 44 41 36.3888 41 27C41 17.6112 33.3888 10 24 10C14.6112 10 7 17.6112 7 27C7 36.3888 14.6112 44 24 44Z','M31 4H17','M38 10L35 13','M24 18V27'],
  'target': ['M21.4172 18.5828C19.3962 19.5481 18 21.6109 18 23.9999C18 27.3136 20.6863 29.9999 24 29.9999C26.389 29.9999 28.4519 28.6037 29.4172 26.5828','M28.2793 11.7207C26.9392 11.2538 25.4992 11 24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37C31.1797 37 37 31.1797 37 24C37 22.5008 36.7462 21.0608 36.2793 19.7207','M33.5675 6.43255C30.7255 4.88151 27.4657 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 20.5343 43.1185 17.2745 41.5675 14.4325','M44 4L24 24'],
  'thumbs-up': ['M27.6002 18.5998V11.3998C27.6002 8.41743 25.1826 5.99977 22.2002 5.99977L15.0002 22.1998V41.9998H35.9162C37.7113 42.0201 39.2471 40.7147 39.5162 38.9398L42.0002 22.7398C42.1587 21.6955 41.8506 20.6343 41.1576 19.8373C40.4645 19.0403 39.4564 18.5878 38.4002 18.5998H27.6002Z','M15 22.0001H10.194C8.08532 21.9628 6.2827 23.7095 6 25.7994V38.3994C6.2827 40.4894 8.08532 42.0367 10.194 41.9994H15V22.0001Z'],
  'time': ['M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z','M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883'],
  'tool': ['M44 16C44 22.6274 38.6274 28 32 28C29.9733 28 28.0639 27.4975 26.3896 26.6104L9 44L4 39L21.3896 21.6104C20.5025 19.9361 20 18.0267 20 16C20 9.37258 25.3726 4 32 4C34.0267 4 35.9361 4.50245 37.6104 5.38959L30 13L35 18L42.6104 10.3896C43.4975 12.0639 44 13.9733 44 16Z'],
  'transfer': ['M37 28.3923V35.4066C37 39.048 34.0885 42 30.497 42C26.9054 42 23.9939 39.048 23.9939 35.4066L24.0061 13.1429C24.0061 9.19797 21.0946 6 17.503 6C13.9115 6 11 9.19797 11 13.1429V28.3923','M43 31L37 25L31 31','M43 10.7273C43 15.1818 37 19 37 19C37 19 31 15.1818 31 10.7273C31 9.20831 31.6321 7.75155 32.7574 6.67748C33.8826 5.60341 35.4087 5 37 5C38.5913 5 40.1174 5.60341 41.2426 6.67748C42.3679 7.75155 43 9.20831 43 10.7273Z','M17 34.7273C17 39.1818 11 43 11 43C11 43 5 39.1818 5 34.7273C5 33.2083 5.63214 31.7516 6.75736 30.6775C7.88258 29.6034 9.4087 29 11 29C12.5913 29 14.1174 29.6034 15.2426 30.6775C16.3679 31.7516 17 33.2083 17 34.7273Z','F:M35 11A2 2 0 1 0 39 11A2 2 0 1 0 35 11Z','F:M9 35A2 2 0 1 0 13 35A2 2 0 1 0 9 35Z'],
  'translate': ['M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z','M16 6L17 9','M6 11H28','M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32','M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32'],
  'trophy': ['M24 30C30.6274 30 36 24.4694 36 17.6471V4H12V17.6471C12 24.4694 17.3726 30 24 30Z','M12 21V11H4C4 17.6667 8 21 12 21Z','M36 21V11H44C44 17.6667 40 21 36 21Z','M24 32V36','M15 42L18.69 36H29.0425L33 42H15Z'],
  'tv': ['M7 14H41A2 2 0 0 1 43 16V40A2 2 0 0 1 41 42H7A2 2 0 0 1 5 40V16A2 2 0 0 1 7 14Z','M24 14L38 6','M23 14L10 6','M35 20L35 26','F:M35 32H35A2 2 0 0 1 37 34V34A2 2 0 0 1 35 36H35A2 2 0 0 1 33 34V34A2 2 0 0 1 35 32Z'],
  'user': ['M16 12A8 8 0 1 0 32 12A8 8 0 1 0 16 12Z','M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44'],
  'voice': ['M24 4H24A7 7 0 0 1 31 11V24A7 7 0 0 1 24 31H24A7 7 0 0 1 17 24V11A7 7 0 0 1 24 4Z','M9 23C9 31.2843 15.7157 38 24 38C32.2843 38 39 31.2843 39 23','M24 38V44'],
  'wallet': ['M17.982 11.9689L31.7846 4L36.397 11.9889L17.982 11.9689Z','M4 14C4 12.8954 4.89543 12 6 12H42C43.1046 12 44 12.8954 44 14V42C44 43.1046 43.1046 44 42 44H6C4.89543 44 4 43.1046 4 42V14Z','M35.25 33H44V23H35.25C32.3505 23 30 25.2386 30 28C30 30.7614 32.3505 33 35.25 33Z','M44 16.5V40.5'],
  'workbench': ['M12 33H4V7H44V33H36H12Z','M16 22V26','M24 33V39','M24 18V26','M32 14V26','M12 41H36'],
  'write': ['M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z','M27.9521 12.3872L36.4374 20.8725'],
} as const;

export type IconName = keyof typeof ICONS;

/** The four items of "Bij elke bouw inbegrepen", in copy order. */
export const STANDARD_ICONS: IconName[] = ['chart-line', 'protect', 'peoples', 'switch'];

/**
 * Headlines in constants.ts mark two words (<red>, <blue>). The house style allows one punch
 * per headline: keep the chosen tag as a no-wrap punch span, drop the other tag's markup.
 */
export function punch(src: string, keep: 'red' | 'blue'): string {
  const drop = keep === 'red' ? 'blue' : 'red';
  return src
    .replace(new RegExp(`<${drop}>(.*?)</${drop}>`, 'g'), '$1')
    .replace(new RegExp(`<${keep}>(.*?)</${keep}>`, 'g'), '<span class="punch">$1</span>');
}

export function plain(src: string): string {
  return src.replace(/<\/?(red|blue)>/g, '');
}

/* ---------- Dutch line breaking ----------
   A typesetter never ends a line on an article, preposition, conjunction or possessive, never
   splits a number from its unit, never strands the first word of a sentence at a line end and
   never leaves a single word alone on the last line. zet() encodes that with non-breaking
   spaces; the browser then only breaks where a typesetter would. A cap per glued group keeps
   lines from overflowing narrow columns. */

const NBSP = String.fromCharCode(160);

/** Words that belong to the word after them. */
const FORWARD = new Set([
  'de', 'het', 'een', "'t", 'en', 'of', 'maar', 'dat', 'die', 'wat', 'hoe', 'als', 'om', 'te', 'tot',
  'van', 'voor', 'in', 'op', 'aan', 'bij', 'met', 'naar', 'uit', 'door', 'over', 'vanaf', 'binnen',
  'zonder', 'onder', 'tussen', 'je', 'jouw', 'ons', 'onze', 'hun', 'uw', 'elke', 'iedere', 'geen', 'zo', 'er',
  'één', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen', 'tien', 'heel', 'én',
  // English pages (phase 7) use the same setter: their function words bind forward too.
  'the', 'a', 'an', 'of', 'to', 'for', 'with', 'and', 'or', 'your', 'our', 'their', 'its', 'my', 'from',
  'by', 'at', 'on', 'into', 'than', 'no', 'not', 'every', 'each', 'one', 'two', 'three', 'four', 'five', 'six',
]);

/** Articles and possessives bind hardest: a line never ends on "de", "een" or "je". */
const DETERMINERS = new Set(['de', 'het', 'een', "'t", 'je', 'jouw', 'ons', 'onze', 'hun', 'uw', 'elke', 'iedere', 'the', 'a', 'an', 'your', 'our', 'their', 'its', 'my']);

/** Display headings a typesetter sets by hand: " | " marks the only allowed breaks. */
const HAND_SET: Record<string, string> = {
  'Vertel wat je wilt bouwen': 'Vertel wat je | wilt bouwen',
  'Vervangen wat niet meer voldoet': 'Vervangen | wat niet meer voldoet',
};

/** Fixed combinations that never break. */
const PHRASES = new Set([
  'ai act', 'ai heroes', 'ai fabriek', 'elke dag', 'business case', 'werkend prototype',
  'menselijk toezicht', 'technische bedrijfskunde', 'technische realisatie', 'miljoen euro', 'eigen grond',
  'eigen servers', 'europese partij', 'europese hosting', 'amerikaanse cloud', 'kortere wachttijden',
  'hands-on workshop', 'theorie én',
]);

const strip = (t: string) => t.replace(/<\/?(red|blue)>/g, '').replace(/^[^\p{L}\d€']+|[^\p{L}\d%]+$/gu, '').toLowerCase();
const endsClause = (t: string) => /[,;:·]$/.test(t.replace(/<\/?(red|blue)>/g, ''));
const endsSentence = (t: string) => /[.!?]$/.test(t.replace(/<\/?(red|blue)>/g, ''));
const isNumber = (t: string) => /^[€]?\d[\d.,\-‑]*%?$/.test(strip(t));
const visibleLength = (t: string) => t.replace(/<\/?(red|blue)>/g, '').length;

/**
 * Insert non-breaking spaces where a Dutch typesetter would not allow a line break.
 * Every gap gets a strength:
 *   +10 inside a hand-set unit (write " | " in the source to mark the only allowed breaks;
 *       inside a unit the rules below still decide where it opens if it must)
 *   6  fixed phrase, or a number with its neighbour
 *   5  an article or possessive bound to the next word ("de tekentafel", "een team")
 *   4  another function word bound to the next word ("vanaf", "met", "en"...)
 *   3  the tail of a sentence, clause or text (no lone last word)
 *   2  a short verb, pronoun or adverb leaning on the word before it
 *   1  the first word of a sentence or clause
 * A glued group longer than `cap` characters is too wide for its column, so its weakest gap
 * opens first, nearest the middle. `display` is for headings; `cap` overrides per context.
 */
export function zet(text: string, { display = false, cap }: { display?: boolean; cap?: number } = {}): string {
  const source = HAND_SET[text.trim()] ?? text;
  const units = source.trim().split(/\s+\|\s+/);
  const tokens: string[] = [];
  const unitOf: number[] = [];
  const NBHY = String.fromCharCode(0x2011);
  const hyphens = (t: string) => {
    let out = t.replace(/(^|[^\p{L}])(\p{Lu}{2,})-(?=\p{L})/gu, `$1$2${NBHY}`);
    if (visibleLength(out) <= 14) out = out.replace(/([\p{L}\d])-([\p{L}\d])/gu, `$1${NBHY}$2`);
    return out;
  };
  units.forEach((u, ui) => u.split(/\s+/).forEach((t) => { tokens.push(hyphens(t)); unitOf.push(ui); }));
  if (tokens.length < 2) return tokens.join(' ');
  const handSet = units.length > 1;
  const maxRun = cap ?? (display ? 18 : 26);
  const widowMax = display ? 16 : 24;
  const len = tokens.map(visibleLength);
  const last = tokens.length - 1;
  const strength: number[] = [];
  for (let i = 0; i < last; i++) {
    const a = tokens[i];
    const b = tokens[i + 1];
    const wa = strip(a);
    const wb = strip(b);
    let s = 0;
    if (!endsClause(a) && !endsSentence(a)) {
      const sentenceEnd = endsSentence(b) || i + 1 === last;
      const tail3 = (i + 2 <= last) && (endsSentence(tokens[i + 2]) || i + 2 === last)
        && len[i] + len[i + 1] + len[i + 2] + 2 <= 18 && !endsClause(b) && !endsSentence(b);
      if (PHRASES.has(`${wa} ${wb}`) || isNumber(a) || isNumber(b)) s = 6;
      else if (DETERMINERS.has(wa)) s = 5;
      else if (FORWARD.has(wa)) s = 4;
      else if (i + 1 === last && wa.length + wb.length + 1 <= widowMax) s = 3;
      else if (sentenceEnd && wa.length + wb.length + 1 <= 12) s = 3;
      // the last two words before a comma stay together: "gaat gebruiken,", "daar middenin,"
      else if (endsClause(b) && wa.length + wb.length + 1 <= 15) s = 3;
      else if ((endsClause(b) || endsSentence(b)) && wb.length <= 3) s = 3;
      else if (tail3) s = 3;
      // a short verb, pronoun or adverb leans on the word before it: "beter kan", "bouwen we",
      // and "je" after a verb: "voldoe je", "weet je"
      else if (wb.length <= 3 && (!FORWARD.has(wb) || wb === 'je') && !isNumber(b)) s = 2;
      // the first word of a sentence or of a clause after a comma stays with the next word
      else if ((i === 0 || endsSentence(tokens[i - 1]) || endsClause(tokens[i - 1])) && wa.length <= 12) s = 1;
      // a three-word tail glues both of its gaps
      if (s < 3 && i >= 1 && strength[i - 1] !== undefined) {
        const t0 = i - 1;
        if ((endsSentence(b) || i + 1 === last) && !endsClause(tokens[t0]) && !endsSentence(tokens[t0])
          && len[t0] + len[i] + len[i + 1] + 2 <= 18) s = 3;
      }
    }
    if (handSet) s = unitOf[i] === unitOf[i + 1] ? 10 + s : 0;
    strength.push(s);
  }
  // In running text a short sentence (up to the cap) never breaks: "Alles komt met documentatie."
  if (!display && !handSet) {
    let start = 0;
    for (let i = 0; i <= last; i++) {
      if (!endsSentence(tokens[i]) && i !== last) continue;
      let width = 0;
      for (let k = start; k <= i; k++) width += len[k] + (k > start ? 1 : 0);
      if (i > start && width <= maxRun) for (let g = start; g < i; g++) if (!endsClause(tokens[g])) strength[g] = Math.max(strength[g], 3);
      start = i + 1;
    }
  }
  const glued = strength.map((v) => v > 0);
  // Open the weakest gap of any group that is too long, until every group fits.
  for (let guard = 0; guard < tokens.length; guard++) {
    let opened = false;
    let start = 0;
    for (let i = 0; i <= glued.length; i++) {
      if (i < glued.length && glued[i]) continue;
      let width = 0;
      for (let k = start; k <= i; k++) width += len[k] + (k > start ? 1 : 0);
      if (i > start && width > maxRun) {
        let best = -1;
        let bestScore = Infinity;
        let offset = 0;
        for (let g = start; g < i; g++) {
          offset += len[g] + (g > start ? 1 : 0);
          const score = strength[g] * 10 + Math.abs(offset / width - 0.5);
          if (score < bestScore) { bestScore = score; best = g; }
        }
        glued[best] = false;
        opened = true;
        break;
      }
      start = i + 1;
    }
    if (!opened) break;
  }
  return tokens.reduce((out, t, i) => (i === 0 ? t : out + (glued[i - 1] ? NBSP : ' ') + t), '');
}

/**
 * Photos with extra widths next to the main file (name-900.webp, name.webp, name-2800.webp), so
 * phones load less and 4K and high-density screens stay sharp. The main file's width comes last.
 */
const PHOTO_WIDTHS: Record<string, number> = {
  '/hs/photos/cover-office.webp': 1800,
  '/hs/photos/cover-screen.webp': 1800,
  '/hs/photos/cover-legacy.webp': 1800,
  '/hs/photos/cover-datacenter.webp': 1800,
  '/hs/photos/case-support.webp': 1400,
};

/** The srcset for a photo with extra widths, or undefined for any other image. */
export function photoSrcset(src: string): string | undefined {
  const main = PHOTO_WIDTHS[src];
  if (!main) return undefined;
  const base = src.replace(/\.webp$/, '');
  return `${base}-900.webp 900w, ${src} ${main}w, ${base}-2800.webp 2800w`;
}

/** Inlined brand SVGs share gradient ids; make them unique per instance. */
let n = 0;
export function uniqueSvg(svg: string): string {
  const p = `hs${++n}`;
  return svg.replace(/aih-(gRight|gBottom|iRight|iBottom)/g, `${p}-$1`);
}

/**
 * A display heading for the relaunch pages: Dutch line breaking (zet, display mode) plus the one
 * punch word, marked in the source with asterisks ("Zes dagen. *Vast* bedrag."). " | " marks
 * hand-set breaks as in zet().
 */
export function display(text: string, opts: { cap?: number } = {}): string {
  // The punch never breaks (a no-wrap span), so zet() measures a punch of several words as one
  // word; otherwise it glues the words before it into a run wider than the heading.
  const KEEP = String.fromCharCode(1);
  const joined = text.replace(/\*([^*]+)\*/g, (_, p: string) => `*${p.replace(/ /g, KEEP)}*`);
  return zet(joined, { display: true, ...opts })
    .split(KEEP).join(' ')
    .replace(/\*([^*]+)\*/g, '<span class="punch">$1</span>');
}

/** The same text without punch or break marks, for titles, alt text and meta tags. */
export function plainText(text: string): string {
  return text.replace(/\*/g, '').replace(/\s+\|\s+/g, ' ').trim();
}

/** Running text with inline links written as [label](href); everything else is escaped. */
export function rich(text: string, opts: { cap?: number } = {}): string {
  const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // zet() trims; keep the spaces around a link.
  const set = (seg: string) => {
    const lead = seg.match(/^\s*/)![0] ? ' ' : '';
    const trail = seg.match(/\s*$/)![0] ? ' ' : '';
    return seg.trim() ? lead + esc(zet(seg, opts)) + trail : seg ? ' ' : '';
  };
  const parts: string[] = [];
  let last = 0;
  for (const m of text.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)) {
    parts.push(set(text.slice(last, m.index)));
    parts.push(`<a href="${m[2]}">${esc(zet(m[1], opts))}</a>`);
    last = m.index! + m[0].length;
  }
  parts.push(set(text.slice(last)));
  return parts.join('');
}
