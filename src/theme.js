import { theme } from 'antd';

// Font family constants
const FONT_FAMILY_BODY = '"Source Sans 3", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
const FONT_FAMILY_HEADING = '"Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
const FONT_FAMILY_CODE = '"Space Grotesk Mono", Consolas, "Liberation Mono", Menlo, Courier, monospace';

const customTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    // Font families
    fontFamily: FONT_FAMILY_BODY,
    fontFamilyCode: FONT_FAMILY_CODE,
    fontFamilyHeading: FONT_FAMILY_HEADING,
    
    // Color tokens from Figma (Light Mode - 5006:4) - using rgba() format
    colorPrimary: 'rgba(10, 138, 138, 1)',        // Primary brand color (EDB/6: r:0.039, g:0.541, b:0.541)
    colorSuccess: 'rgba(136, 184, 74, 1)',        // Success state color (Green/6: r:0.533, g:0.722, b:0.290)
    colorWarning: 'rgba(250, 173, 20, 1)',        // Warning state color (Gold/6: r:0.980, g:0.678, b:0.078)
    colorError: 'rgba(255, 77, 79, 1)',           // Error state color (r:1.000, g:0.302, b:0.310)
    colorInfo: 'rgba(10, 138, 138, 1)',           // Info state color (same as primary)
    
    // Background colors
    colorBgBase: 'rgba(255, 255, 255, 1)',        // Base background color (White)
    colorBgContainer: 'rgba(255, 255, 255, 1)',   // Container background color (White)
    colorBgElevated: 'rgba(255, 255, 255, 1)',    // Elevated surface background (White)
    colorBgLayout: 'rgba(246, 246, 246, 1)',      // Layout background color (r:0.965, g:0.965, b:0.965)
    colorBgSpotlight: 'rgba(0, 0, 0, 0.85)',     // Spotlight background color (r:0, g:0, b:0, a:0.85)
    
    // Text colors
    colorText: 'rgba(0, 0, 0, 0.88)',             // Primary text color (r:0, g:0, b:0, a:0.88)
    colorTextSecondary: 'rgba(0, 0, 0, 0.65)',   // Secondary text color (r:0, g:0, b:0, a:0.65)
    colorTextTertiary: 'rgba(0, 0, 0, 0.45)',    // Tertiary text color (r:0, g:0, b:0, a:0.45)
    colorTextQuaternary: 'rgba(0, 0, 0, 0.25)',  // Quaternary text color (r:0, g:0, b:0, a:0.25)
    
    // Border colors
    colorBorder: 'rgba(217, 217, 217, 1)',        // Default border color (r:0.851, g:0.851, b:0.851)
    colorBorderSecondary: 'rgba(240, 240, 240, 1)', // Secondary border color (r:0.941, g:0.941, b:0.941)
    
    // Component specific colors
    colorFill: 'rgba(0, 0, 0, 0.15)',             // Fill color (r:0, g:0, b:0, a:0.15)
    colorFillSecondary: 'rgba(0, 0, 0, 0.06)',    // Secondary fill color (r:0, g:0, b:0, a:0.06)
    colorFillTertiary: 'rgba(0, 0, 0, 0.04)',     // Tertiary fill color (r:0, g:0, b:0, a:0.04)
    colorFillQuaternary: 'rgba(0, 0, 0, 0.02)',   // Quaternary fill color (r:0, g:0, b:0, a:0.02)
    
    // Additional color tokens from Figma
    colorWhite: 'rgba(255, 255, 255, 1)',         // White color
    colorTextBase: 'rgba(0, 0, 0, 1)',            // Base text color
    transparent: 'rgba(0, 0, 0, 0)',              // Transparent color
    
    // Complete Color Palettes (Light Mode - 5006:4) - All shades 0-9
    
    // Gold Palette
    'gold-0': 'rgba(255, 252, 238, 1)',           // Gold/0
    'gold-1': 'rgba(255, 251, 230, 1)',           // Gold/1
    'gold-2': 'rgba(255, 241, 184, 1)',           // Gold/2
    'gold-3': 'rgba(255, 229, 143, 1)',           // Gold/3
    'gold-4': 'rgba(255, 214, 102, 1)',           // Gold/4
    'gold-5': 'rgba(255, 197, 61, 1)',            // Gold/5
    'gold-6': 'rgba(250, 173, 20, 1)',            // Gold/6 (Warning)
    'gold-7': 'rgba(212, 136, 6, 1)',             // Gold/7
    'gold-8': 'rgba(173, 104, 0, 1)',             // Gold/8
    'gold-9': 'rgba(135, 77, 0, 1)',              // Gold/9
    
    // Cyan Palette
    'cyan-0': 'rgba(242, 252, 252, 1)',           // Cyan/0
    'cyan-1': 'rgba(230, 251, 255, 1)',           // Cyan/1
    'cyan-2': 'rgba(184, 241, 255, 1)',           // Cyan/2
    'cyan-3': 'rgba(143, 229, 255, 1)',           // Cyan/3
    'cyan-4': 'rgba(102, 214, 255, 1)',           // Cyan/4
    'cyan-5': 'rgba(51, 199, 219, 1)',            // Cyan/5
    'cyan-6': 'rgba(0, 184, 204, 1)',             // Cyan/6
    'cyan-7': 'rgba(0, 153, 170, 1)',             // Cyan/7
    'cyan-8': 'rgba(0, 122, 136, 1)',             // Cyan/8
    'cyan-9': 'rgba(0, 91, 102, 1)',              // Cyan/9
    
    // Blue Palette
    'blue-0': 'rgba(243, 249, 252, 1)',           // Blue/0
    'blue-1': 'rgba(230, 241, 255, 1)',           // Blue/1
    'blue-2': 'rgba(184, 214, 255, 1)',           // Blue/2
    'blue-3': 'rgba(143, 199, 255, 1)',           // Blue/3
    'blue-4': 'rgba(102, 184, 255, 1)',           // Blue/4
    'blue-5': 'rgba(61, 154, 225, 1)',            // Blue/5
    'blue-6': 'rgba(38, 128, 204, 1)',            // Blue/6
    'blue-7': 'rgba(0, 102, 179, 1)',             // Blue/7
    'blue-8': 'rgba(0, 77, 153, 1)',              // Blue/8
    'blue-9': 'rgba(0, 51, 128, 1)',              // Blue/9
    
    // Green Palette
    'green-0': 'rgba(247, 251, 243, 1)',          // Green/0
    'green-1': 'rgba(240, 255, 230, 1)',          // Green/1
    'green-2': 'rgba(204, 255, 184, 1)',          // Green/2
    'green-3': 'rgba(174, 255, 143, 1)',          // Green/3
    'green-4': 'rgba(144, 255, 102, 1)',          // Green/4
    'green-5': 'rgba(155, 198, 102, 1)',          // Green/5
    'green-6': 'rgba(136, 184, 74, 1)',           // Green/6 (Success)
    'green-7': 'rgba(117, 170, 46, 1)',           // Green/7
    'green-8': 'rgba(98, 156, 18, 1)',            // Green/8
    'green-9': 'rgba(79, 142, 0, 1)',             // Green/9
    
    // Magenta Palette
    'magenta-0': 'rgba(255, 245, 252, 1)',        // Magenta/0
    'magenta-1': 'rgba(255, 230, 255, 1)',        // Magenta/1
    'magenta-2': 'rgba(255, 184, 255, 1)',        // Magenta/2
    'magenta-3': 'rgba(255, 143, 255, 1)',        // Magenta/3
    'magenta-4': 'rgba(255, 102, 255, 1)',        // Magenta/4
    'magenta-5': 'rgba(224, 0, 135, 1)',          // Magenta/5
    'magenta-6': 'rgba(204, 0, 122, 1)',          // Magenta/6
    'magenta-7': 'rgba(179, 0, 105, 1)',          // Magenta/7
    'magenta-8': 'rgba(153, 0, 89, 1)',           // Magenta/8
    'magenta-9': 'rgba(128, 0, 72, 1)',           // Magenta/9
    
    // Orange Palette
    'orange-0': 'rgba(255, 245, 240, 1)',         // Orange/0
    'orange-1': 'rgba(255, 240, 230, 1)',         // Orange/1
    'orange-2': 'rgba(255, 204, 184, 1)',         // Orange/2
    'orange-3': 'rgba(255, 168, 143, 1)',         // Orange/3
    'orange-4': 'rgba(255, 132, 102, 1)',         // Orange/4
    'orange-5': 'rgba(255, 98, 41, 1)',           // Orange/5
    'orange-6': 'rgba(255, 64, 0, 1)',            // Orange/6
    'orange-7': 'rgba(230, 46, 0, 1)',            // Orange/7
    'orange-8': 'rgba(204, 28, 0, 1)',            // Orange/8
    'orange-9': 'rgba(179, 10, 0, 1)',            // Orange/9
    
    // Purple Palette
    'purple-0': 'rgba(246, 245, 250, 1)',         // Purple/0
    'purple-1': 'rgba(248, 240, 255, 1)',         // Purple/1
    'purple-2': 'rgba(230, 204, 255, 1)',         // Purple/2
    'purple-3': 'rgba(212, 168, 255, 1)',         // Purple/3
    'purple-4': 'rgba(194, 132, 255, 1)',         // Purple/4
    'purple-5': 'rgba(129, 113, 181, 1)',         // Purple/5
    'purple-6': 'rgba(102, 77, 153, 1)',          // Purple/6
    'purple-7': 'rgba(77, 41, 128, 1)',           // Purple/7
    'purple-8': 'rgba(51, 26, 102, 1)',           // Purple/8
    'purple-9': 'rgba(26, 10, 77, 1)',            // Purple/9
    
    // Red Palette
    'red-0': 'rgba(255, 240, 240, 1)',            // Red/0
    'red-1': 'rgba(255, 230, 230, 1)',            // Red/1
    'red-2': 'rgba(255, 184, 184, 1)',            // Red/2
    'red-3': 'rgba(255, 143, 143, 1)',            // Red/3
    'red-4': 'rgba(255, 102, 102, 1)',            // Red/4
    'red-5': 'rgba(227, 69, 69, 1)',              // Red/5
    'red-6': 'rgba(204, 26, 26, 1)',              // Red/6
    'red-7': 'rgba(179, 0, 0, 1)',                // Red/7
    'red-8': 'rgba(153, 0, 0, 1)',                // Red/8
    'red-9': 'rgba(128, 0, 0, 1)',                // Red/9
    
    // Volcano Palette
    'volcano-0': 'rgba(255, 247, 240, 1)',        // Volcano/0
    'volcano-1': 'rgba(255, 240, 230, 1)',        // Volcano/1
    'volcano-2': 'rgba(255, 204, 184, 1)',        // Volcano/2
    'volcano-3': 'rgba(255, 168, 143, 1)',        // Volcano/3
    'volcano-4': 'rgba(255, 132, 102, 1)',        // Volcano/4
    'volcano-5': 'rgba(255, 122, 69, 1)',         // Volcano/5
    'volcano-6': 'rgba(255, 92, 36, 1)',          // Volcano/6
    'volcano-7': 'rgba(230, 62, 0, 1)',           // Volcano/7
    'volcano-8': 'rgba(204, 38, 0, 1)',           // Volcano/8
    'volcano-9': 'rgba(179, 15, 0, 1)',           // Volcano/9
    
    // Yellow Palette
    'yellow-0': 'rgba(255, 253, 240, 1)',         // Yellow/0
    'yellow-1': 'rgba(255, 255, 230, 1)',         // Yellow/1
    'yellow-2': 'rgba(255, 255, 184, 1)',         // Yellow/2
    'yellow-3': 'rgba(255, 255, 143, 1)',         // Yellow/3
    'yellow-4': 'rgba(255, 255, 102, 1)',         // Yellow/4
    'yellow-5': 'rgba(255, 192, 3, 1)',           // Yellow/5
    'yellow-6': 'rgba(255, 170, 0, 1)',           // Yellow/6
    'yellow-7': 'rgba(230, 149, 0, 1)',           // Yellow/7
    'yellow-8': 'rgba(204, 128, 0, 1)',           // Yellow/8
    'yellow-9': 'rgba(179, 107, 0, 1)',           // Yellow/9
    
    // EDB Palette (Primary Brand)
    'edb-0': 'rgba(245, 255, 254, 1)',            // EDB/0
    'edb-1': 'rgba(235, 246, 245, 1)',            // EDB/1
    'edb-2': 'rgba(199, 230, 228, 1)',            // EDB/2
    'edb-3': 'rgba(163, 214, 211, 1)',            // EDB/3
    'edb-4': 'rgba(127, 198, 194, 1)',            // EDB/4
    'edb-5': 'rgba(35, 150, 147, 1)',             // EDB/5
    'edb-6': 'rgba(10, 138, 138, 1)',             // EDB/6 (Primary)
    'edb-7': 'rgba(0, 122, 122, 1)',              // EDB/7
    'edb-8': 'rgba(0, 102, 102, 1)',              // EDB/8
    'edb-9': 'rgba(0, 82, 82, 1)',                // EDB/9
    
    // Lime Palette
    'lime-0': 'rgba(252, 255, 234, 1)',           // Lime/0
    'lime-1': 'rgba(247, 255, 230, 1)',           // Lime/1
    'lime-2': 'rgba(230, 255, 184, 1)',           // Lime/2
    'lime-3': 'rgba(214, 255, 143, 1)',           // Lime/3
    'lime-4': 'rgba(198, 255, 102, 1)',           // Lime/4
    'lime-5': 'rgba(186, 230, 55, 1)',            // Lime/5
    'lime-6': 'rgba(174, 204, 0, 1)',             // Lime/6
    'lime-7': 'rgba(153, 179, 0, 1)',             // Lime/7
    'lime-8': 'rgba(128, 153, 0, 1)',             // Lime/8
    'lime-9': 'rgba(102, 128, 0, 1)',             // Lime/9
    
    // Typography tokens
    fontSize: 14,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,
    fontSizeLG: 16,
    fontSizeSM: 12,
    fontSizeXL: 20,
    fontSizeIcon: 12,
    
    // Line heights
    lineHeight: 1.5714285373687744,
    lineHeightHeading1: 1.2105263471603394,
    lineHeightHeading2: 1.2666666507720947,
    lineHeightHeading3: 1.3333333730697632,
    lineHeightHeading4: 1.399999976158142,
    lineHeightHeading5: 1.5,
    lineHeightLG: 1.5,
    lineHeightSM: 1.6666666269302368,
    
    // Font weights
    fontWeightStrong: 600,
  },
  components: {
    Typography: {
      fontFamily: FONT_FAMILY_BODY,
      titleFontFamily: FONT_FAMILY_HEADING,
    },
    Button: {
      fontFamily: FONT_FAMILY_BODY,
    },
    Input: {
      fontFamily: FONT_FAMILY_BODY,
    },
    Select: {
      fontFamily: FONT_FAMILY_BODY,
    },
    Menu: {
      fontFamily: FONT_FAMILY_BODY,
    },
    Table: {
      fontFamily: FONT_FAMILY_BODY,
    },
    Card: {
      fontFamily: FONT_FAMILY_BODY,
    },
    Modal: {
      fontFamily: FONT_FAMILY_BODY,
    },
    Form: {
      fontFamily: FONT_FAMILY_BODY,
    },
  },
};

export default customTheme;
