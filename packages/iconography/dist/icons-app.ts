export type IconsAppId =
  | 'alarm'
  | 'arrow-down-left'
  | 'arrow-down-right'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up-left'
  | 'arrow-up-right'
  | 'arrow-up'
  | 'asterisk'
  | 'at'
  | 'broadcast'
  | 'calendar-blank'
  | 'calendar-x'
  | 'calendar'
  | 'camera-slash'
  | 'camera'
  | 'car'
  | 'cell-signal-x'
  | 'chartbar'
  | 'chat-centered-dots'
  | 'chat-centered-text'
  | 'chat-centered'
  | 'chat-dots'
  | 'chat-text'
  | 'chat'
  | 'chats'
  | 'check-circle-fill'
  | 'check-circle'
  | 'check-double'
  | 'check'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'clipboard-text'
  | 'clock-afternoon'
  | 'clock-clockwise'
  | 'clock-counterclockwise'
  | 'clock'
  | 'coffee'
  | 'compass'
  | 'credit-card'
  | 'cross-circle'
  | 'cross'
  | 'dots-three'
  | 'download'
  | 'envelope-open'
  | 'envelope-simple-open'
  | 'envelope-simple'
  | 'envelope'
  | 'eye-closed'
  | 'eye-slash'
  | 'eye'
  | 'face-mask'
  | 'file-text'
  | 'fingerprint-simple'
  | 'fingerprint'
  | 'hamburger'
  | 'hash'
  | 'headset'
  | 'house-line'
  | 'house-simple'
  | 'house'
  | 'icon-placeholder'
  | 'image'
  | 'info-fill'
  | 'info'
  | 'languages'
  | 'lock-key-open'
  | 'lock-key'
  | 'magnifying-glass-minus'
  | 'magnifying-glass-plus'
  | 'magnifying-glass'
  | 'map-pin-fill'
  | 'map-pin-line'
  | 'map-pin'
  | 'map-trifold'
  | 'medal'
  | 'megaphone'
  | 'microphone-slash'
  | 'microphone'
  | 'minus-circle'
  | 'moon-stars'
  | 'moon'
  | 'music-note-simple'
  | 'navigation-arrow'
  | 'notification-slash'
  | 'notification'
  | 'nut'
  | 'paper-plane-right'
  | 'paper-plane-tilt'
  | 'paper-plane'
  | 'path'
  | 'pencil'
  | 'pencilLine'
  | 'person-magnify'
  | 'phone-call'
  | 'phone-disconnect'
  | 'phone-fill'
  | 'phone-incoming'
  | 'phone-outgoing'
  | 'phone-outline'
  | 'phone-slash'
  | 'phone-X'
  | 'plus-circle'
  | 'power'
  | 'price-tag'
  | 'profile'
  | 'question'
  | 'receipt'
  | 'rss-simple'
  | 'rss'
  | 'settings'
  | 'share-network'
  | 'shield-check'
  | 'sign-out'
  | 'smiley-meh'
  | 'smiley-sad'
  | 'smiley'
  | 'spinner'
  | 'star'
  | 'sticker'
  | 'storefront'
  | 'sun-rise'
  | 'sun'
  | 'target-simple'
  | 'target'
  | 'thumbs-down'
  | 'thumbs-up'
  | 'timer'
  | 'upload'
  | 'user-card'
  | 'user-gear'
  | 'users'
  | 'video-camera-slash'
  | 'video-camera'
  | 'warning-circle-fill'
  | 'warning-circle'
  | 'warning-triangle-fill'
  | 'warning'
  | 'watch'
  | 'whistle';

export const ICONS_APP_CODEPOINTS: { [key in IconsAppId]: string } = {
  'alarm': '61697',
  'arrow-down-left': '61698',
  'arrow-down-right': '61699',
  'arrow-down': '61700',
  'arrow-left': '61701',
  'arrow-right': '61702',
  'arrow-up-left': '61703',
  'arrow-up-right': '61704',
  'arrow-up': '61705',
  'asterisk': '61706',
  'at': '61707',
  'broadcast': '61708',
  'calendar-blank': '61709',
  'calendar-x': '61710',
  'calendar': '61711',
  'camera-slash': '61712',
  'camera': '61713',
  'car': '61714',
  'cell-signal-x': '61715',
  'chartbar': '61716',
  'chat-centered-dots': '61717',
  'chat-centered-text': '61718',
  'chat-centered': '61719',
  'chat-dots': '61720',
  'chat-text': '61721',
  'chat': '61722',
  'chats': '61723',
  'check-circle-fill': '61724',
  'check-circle': '61725',
  'check-double': '61726',
  'check': '61727',
  'chevron-down': '61728',
  'chevron-left': '61729',
  'chevron-right': '61730',
  'chevron-up': '61731',
  'clipboard-text': '61732',
  'clock-afternoon': '61733',
  'clock-clockwise': '61734',
  'clock-counterclockwise': '61735',
  'clock': '61736',
  'coffee': '61737',
  'compass': '61738',
  'credit-card': '61739',
  'cross-circle': '61740',
  'cross': '61741',
  'dots-three': '61742',
  'download': '61743',
  'envelope-open': '61744',
  'envelope-simple-open': '61745',
  'envelope-simple': '61746',
  'envelope': '61747',
  'eye-closed': '61748',
  'eye-slash': '61749',
  'eye': '61750',
  'face-mask': '61751',
  'file-text': '61752',
  'fingerprint-simple': '61753',
  'fingerprint': '61754',
  'hamburger': '61755',
  'hash': '61756',
  'headset': '61757',
  'house-line': '61758',
  'house-simple': '61759',
  'house': '61760',
  'icon-placeholder': '61761',
  'image': '61762',
  'info-fill': '61763',
  'info': '61764',
  'languages': '61765',
  'lock-key-open': '61766',
  'lock-key': '61767',
  'magnifying-glass-minus': '61768',
  'magnifying-glass-plus': '61769',
  'magnifying-glass': '61770',
  'map-pin-fill': '61771',
  'map-pin-line': '61772',
  'map-pin': '61773',
  'map-trifold': '61774',
  'medal': '61775',
  'megaphone': '61776',
  'microphone-slash': '61777',
  'microphone': '61778',
  'minus-circle': '61779',
  'moon-stars': '61780',
  'moon': '61781',
  'music-note-simple': '61782',
  'navigation-arrow': '61783',
  'notification-slash': '61784',
  'notification': '61785',
  'nut': '61786',
  'paper-plane-right': '61787',
  'paper-plane-tilt': '61788',
  'paper-plane': '61789',
  'path': '61790',
  'pencil': '61791',
  'pencilLine': '61792',
  'person-magnify': '61793',
  'phone-call': '61794',
  'phone-disconnect': '61795',
  'phone-fill': '61796',
  'phone-incoming': '61797',
  'phone-outgoing': '61798',
  'phone-outline': '61799',
  'phone-slash': '61800',
  'phone-X': '61801',
  'plus-circle': '61802',
  'power': '61803',
  'price-tag': '61804',
  'profile': '61805',
  'question': '61806',
  'receipt': '61807',
  'rss-simple': '61808',
  'rss': '61809',
  'settings': '61810',
  'share-network': '61811',
  'shield-check': '61812',
  'sign-out': '61813',
  'smiley-meh': '61814',
  'smiley-sad': '61815',
  'smiley': '61816',
  'spinner': '61817',
  'star': '61818',
  'sticker': '61819',
  'storefront': '61820',
  'sun-rise': '61821',
  'sun': '61822',
  'target-simple': '61823',
  'target': '61824',
  'thumbs-down': '61825',
  'thumbs-up': '61826',
  'timer': '61827',
  'upload': '61828',
  'user-card': '61829',
  'user-gear': '61830',
  'users': '61831',
  'video-camera-slash': '61832',
  'video-camera': '61833',
  'warning-circle-fill': '61834',
  'warning-circle': '61835',
  'warning-triangle-fill': '61836',
  'warning': '61837',
  'watch': '61838',
  'whistle': '61839',
};
