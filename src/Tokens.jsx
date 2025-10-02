import React, { useState } from 'react';
import { 
  ConfigProvider, 
  Typography, 
  Card, 
  Row, 
  Col, 
  Space, 
  Button, 
  Input, 
  Select, 
  Table, 
  Tag,
  Divider,
  Collapse,
  Badge,
  Alert
} from 'antd';
import { CopyOutlined, CheckOutlined } from '@ant-design/icons';
import customTheme from './theme';

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const Tokens = () => {
  const [copiedItems, setCopiedItems] = useState(new Set());

  const copyToClipboard = async (text, itemId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItems(prev => new Set([...prev, itemId]));
      setTimeout(() => {
        setCopiedItems(prev => {
          const newSet = new Set(prev);
          newSet.delete(itemId);
          return newSet;
        });
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const CodeBlock = ({ children, copyText, itemId }) => (
    <div style={{ 
      position: 'relative', 
      backgroundColor: '#f5f5f5', 
      padding: '12px', 
      borderRadius: '6px',
      fontFamily: customTheme.token.fontFamilyCode,
      fontSize: '12px',
      marginTop: '8px'
    }}>
      <Button
        size="small"
        type="text"
        icon={copiedItems.has(itemId) ? <CheckOutlined /> : <CopyOutlined />}
        onClick={() => copyToClipboard(copyText, itemId)}
        style={{ position: 'absolute', top: '8px', right: '8px' }}
      />
      <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{children}</pre>
    </div>
  );

  const ColorSwatch = ({ color, name, token }) => (
    <div style={{ textAlign: 'center', marginBottom: '16px' }}>
      <div
        style={{
          width: '100%',
          height: '60px',
          backgroundColor: color,
          borderRadius: '6px',
          marginBottom: '8px',
          border: '1px solid #d9d9d9'
        }}
      />
      <Text strong style={{ fontSize: '12px' }}>{name}</Text>
      <br />
      <Text code style={{ fontSize: '10px' }}>{token}</Text>
      <br />
      <Text style={{ fontSize: '10px', color: '#666' }}>{color}</Text>
    </div>
  );

  const TypographyExample = ({ level, size, lineHeight, weight, children, token }) => {
    const isHeading = level.startsWith('H');
    const fontFamily = isHeading ? customTheme.token.fontFamilyHeading : customTheme.token.fontFamily;
    
    return (
      <div style={{ marginBottom: '16px' }}>
        <div style={{ 
          fontSize: size, 
          lineHeight: lineHeight,
          fontWeight: weight,
          fontFamily: fontFamily,
          marginBottom: '8px'
        }}>
          {children}
        </div>
        <Text code style={{ fontSize: '10px' }}>
          {token}: {size}px, lineHeight: {lineHeight}, fontWeight: {weight}, fontFamily: {isHeading ? 'Space Grotesk' : 'Source Sans 3'}
        </Text>
      </div>
    );
  };

  // Color palettes from theme
  const colorPalettes = [
    { name: 'Gold', prefix: 'gold', colors: [0,1,2,3,4,5,6,7,8,9] },
    { name: 'Cyan', prefix: 'cyan', colors: [0,1,2,3,4,5,6,7,8,9] },
    { name: 'Blue', prefix: 'blue', colors: [0,1,2,3,4,5,6,7,8,9] },
    { name: 'Green', prefix: 'green', colors: [0,1,2,3,4,5,6,7,8,9] },
    { name: 'Magenta', prefix: 'magenta', colors: [0,1,2,3,4,5,6,7,8,9] },
    { name: 'Orange', prefix: 'orange', colors: [0,1,2,3,4,5,6,7,8,9] },
    { name: 'Purple', prefix: 'purple', colors: [0,1,2,3,4,5,6,7,8,9] },
    { name: 'Red', prefix: 'red', colors: [0,1,2,3,4,5,6,7,8,9] },
    { name: 'Volcano', prefix: 'volcano', colors: [0,1,2,3,4,5,6,7,8,9] },
    { name: 'Yellow', prefix: 'yellow', colors: [0,1,2,3,4,5,6,7,8,9] },
    { name: 'EDB (Primary)', prefix: 'edb', colors: [0,1,2,3,4,5,6,7,8,9] },
    { name: 'Lime', prefix: 'lime', colors: [0,1,2,3,4,5,6,7,8,9] }
  ];

  const semanticColors = [
    { name: 'Primary', token: 'colorPrimary', color: customTheme.token.colorPrimary },
    { name: 'Success', token: 'colorSuccess', color: customTheme.token.colorSuccess },
    { name: 'Warning', token: 'colorWarning', color: customTheme.token.colorWarning },
    { name: 'Error', token: 'colorError', color: customTheme.token.colorError },
    { name: 'Info', token: 'colorInfo', color: customTheme.token.colorInfo }
  ];

  const additionalColors = [
    { name: 'White', token: 'colorWhite', color: customTheme.token.colorWhite },
    { name: 'Text Base', token: 'colorTextBase', color: customTheme.token.colorTextBase },
    { name: 'Transparent', token: 'transparent', color: customTheme.token.transparent }
  ];

  const backgroundColors = [
    { name: 'Base', token: 'colorBgBase', color: customTheme.token.colorBgBase },
    { name: 'Container', token: 'colorBgContainer', color: customTheme.token.colorBgContainer },
    { name: 'Elevated', token: 'colorBgElevated', color: customTheme.token.colorBgElevated },
    { name: 'Layout', token: 'colorBgLayout', color: customTheme.token.colorBgLayout },
    { name: 'Spotlight', token: 'colorBgSpotlight', color: customTheme.token.colorBgSpotlight }
  ];

  const textColors = [
    { name: 'Primary Text', token: 'colorText', color: customTheme.token.colorText },
    { name: 'Secondary Text', token: 'colorTextSecondary', color: customTheme.token.colorTextSecondary },
    { name: 'Tertiary Text', token: 'colorTextTertiary', color: customTheme.token.colorTextTertiary },
    { name: 'Quaternary Text', token: 'colorTextQuaternary', color: customTheme.token.colorTextQuaternary }
  ];

  const borderColors = [
    { name: 'Default Border', token: 'colorBorder', color: customTheme.token.colorBorder },
    { name: 'Secondary Border', token: 'colorBorderSecondary', color: customTheme.token.colorBorderSecondary }
  ];

  const fillColors = [
    { name: 'Fill', token: 'colorFill', color: customTheme.token.colorFill },
    { name: 'Secondary Fill', token: 'colorFillSecondary', color: customTheme.token.colorFillSecondary },
    { name: 'Tertiary Fill', token: 'colorFillTertiary', color: customTheme.token.colorFillTertiary },
    { name: 'Quaternary Fill', token: 'colorFillQuaternary', color: customTheme.token.colorFillQuaternary }
  ];

  const typographyData = [
    { level: 'H1', size: customTheme.token.fontSizeHeading1, lineHeight: customTheme.token.lineHeightHeading1, weight: 600, token: 'fontSizeHeading1' },
    { level: 'H2', size: customTheme.token.fontSizeHeading2, lineHeight: customTheme.token.lineHeightHeading2, weight: 600, token: 'fontSizeHeading2' },
    { level: 'H3', size: customTheme.token.fontSizeHeading3, lineHeight: customTheme.token.lineHeightHeading3, weight: 600, token: 'fontSizeHeading3' },
    { level: 'H4', size: customTheme.token.fontSizeHeading4, lineHeight: customTheme.token.lineHeightHeading4, weight: 600, token: 'fontSizeHeading4' },
    { level: 'H5', size: customTheme.token.fontSizeHeading5, lineHeight: customTheme.token.lineHeightHeading5, weight: 600, token: 'fontSizeHeading5' },
    { level: 'Body', size: customTheme.token.fontSize, lineHeight: customTheme.token.lineHeight, weight: 400, token: 'fontSize' },
    { level: 'Large', size: customTheme.token.fontSizeLG, lineHeight: customTheme.token.lineHeightLG, weight: 400, token: 'fontSizeLG' },
    { level: 'Small', size: customTheme.token.fontSizeSM, lineHeight: customTheme.token.lineHeightSM, weight: 400, token: 'fontSizeSM' },
    { level: 'Extra Large', size: customTheme.token.fontSizeXL, lineHeight: customTheme.token.lineHeight, weight: 400, token: 'fontSizeXL' },
    { level: 'Icon', size: customTheme.token.fontSizeIcon, lineHeight: customTheme.token.lineHeight, weight: 400, token: 'fontSizeIcon' }
  ];

  const fontWeights = [
    { name: 'Strong', weight: customTheme.token.fontWeightStrong, token: 'fontWeightStrong' }
  ];

  const lineHeights = [
    { name: 'Default', value: customTheme.token.lineHeight, token: 'lineHeight' },
    { name: 'Heading 1', value: customTheme.token.lineHeightHeading1, token: 'lineHeightHeading1' },
    { name: 'Heading 2', value: customTheme.token.lineHeightHeading2, token: 'lineHeightHeading2' },
    { name: 'Heading 3', value: customTheme.token.lineHeightHeading3, token: 'lineHeightHeading3' },
    { name: 'Heading 4', value: customTheme.token.lineHeightHeading4, token: 'lineHeightHeading4' },
    { name: 'Heading 5', value: customTheme.token.lineHeightHeading5, token: 'lineHeightHeading5' },
    { name: 'Large', value: customTheme.token.lineHeightLG, token: 'lineHeightLG' },
    { name: 'Small', value: customTheme.token.lineHeightSM, token: 'lineHeightSM' }
  ];

  const componentExamples = [
    { name: 'Button', component: <Button type="primary">Primary Button</Button> },
    { name: 'Input', component: <Input placeholder="Input field" /> },
    { name: 'Select', component: <Select placeholder="Select option" style={{ width: 200 }} /> },
    { name: 'Tag', component: <Tag color="blue">Tag</Tag> },
    { name: 'Badge', component: <Badge count={5}><Button>Badge</Button></Badge> },
    { name: 'Alert', component: <Alert message="Alert message" type="info" /> }
  ];

  return (
    <ConfigProvider theme={customTheme}>
      <div style={{ padding: '24px', backgroundColor: customTheme.token.colorBgLayout, minHeight: '100vh' }}>
        <Title level={1}>Design Tokens Reference</Title>
        <Paragraph>
          Complete reference of all design tokens and theme variables used in the Hybrid Manager application.
        </Paragraph>

        <Collapse defaultActiveKey={['semantic-colors', 'additional-colors', 'typography']} size="large">
          {/* Semantic Colors */}
          <Panel header="Semantic Colors" key="semantic-colors">
            <Row gutter={[16, 16]}>
              {semanticColors.map((color) => (
                <Col xs={24} sm={12} md={8} lg={6} key={color.token}>
                  <ColorSwatch 
                    color={color.color} 
                    name={color.name} 
                    token={color.token}
                  />
                </Col>
              ))}
            </Row>
            <CodeBlock 
              copyText="theme.token.colorPrimary" 
              itemId="semantic-colors-code"
            >
{`// Usage in components
const { theme } = useTheme();
const primaryColor = theme.token.colorPrimary;

// In styled components
const StyledButton = styled.button\`
  background-color: \${({ theme }) => theme.token.colorPrimary};
\`;`}
            </CodeBlock>
          </Panel>

          {/* Additional Colors */}
          <Panel header="Additional Colors" key="additional-colors">
            <Row gutter={[16, 16]}>
              {additionalColors.map((color) => (
                <Col xs={24} sm={12} md={8} lg={6} key={color.token}>
                  <ColorSwatch 
                    color={color.color} 
                    name={color.name} 
                    token={color.token}
                  />
                </Col>
              ))}
            </Row>
          </Panel>

          {/* Color Palettes */}
          <Panel header="Color Palettes" key="color-palettes">
            {colorPalettes.map((palette) => (
              <div key={palette.name} style={{ marginBottom: '32px' }}>
                <Title level={4}>{palette.name} Palette</Title>
                <Row gutter={[8, 8]}>
                  {palette.colors.map((shade) => {
                    const token = `${palette.prefix}-${shade}`;
                    const color = customTheme.token[token];
                    return (
                      <Col xs={12} sm={8} md={6} lg={4} xl={2} key={token}>
                        <ColorSwatch 
                          color={color} 
                          name={`${palette.name} ${shade}`} 
                          token={token}
                        />
                      </Col>
                    );
                  })}
                </Row>
                <CodeBlock 
                  copyText={`theme.token.${palette.prefix}-6`} 
                  itemId={`${palette.prefix}-code`}
                >
{`// Access ${palette.name} colors
const { theme } = useTheme();
const ${palette.prefix}6 = theme.token['${palette.prefix}-6']; // Main shade
const ${palette.prefix}0 = theme.token['${palette.prefix}-0']; // Lightest
const ${palette.prefix}9 = theme.token['${palette.prefix}-9']; // Darkest`}
                </CodeBlock>
              </div>
            ))}
          </Panel>

          {/* Background Colors */}
          <Panel header="Background Colors" key="background-colors">
            <Row gutter={[16, 16]}>
              {backgroundColors.map((color) => (
                <Col xs={24} sm={12} md={8} lg={6} key={color.token}>
                  <ColorSwatch 
                    color={color.color} 
                    name={color.name} 
                    token={color.token}
                  />
                </Col>
              ))}
            </Row>
          </Panel>

          {/* Text Colors */}
          <Panel header="Text Colors" key="text-colors">
            <Row gutter={[16, 16]}>
              {textColors.map((color) => (
                <Col xs={24} sm={12} md={8} lg={6} key={color.token}>
                  <ColorSwatch 
                    color={color.color} 
                    name={color.name} 
                    token={color.token}
                  />
                </Col>
              ))}
            </Row>
          </Panel>

          {/* Border & Fill Colors */}
          <Panel header="Border & Fill Colors" key="border-fill-colors">
            <Title level={5}>Border Colors</Title>
            <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
              {borderColors.map((color) => (
                <Col xs={24} sm={12} md={8} lg={6} key={color.token}>
                  <ColorSwatch 
                    color={color.color} 
                    name={color.name} 
                    token={color.token}
                  />
                </Col>
              ))}
            </Row>
            <Title level={5}>Fill Colors</Title>
            <Row gutter={[16, 16]}>
              {fillColors.map((color) => (
                <Col xs={24} sm={12} md={8} lg={6} key={color.token}>
                  <ColorSwatch 
                    color={color.color} 
                    name={color.name} 
                    token={color.token}
                  />
                </Col>
              ))}
            </Row>
          </Panel>

          {/* Typography */}
          <Panel header="Typography" key="typography">
            <Title level={4}>Font Families</Title>
            <Space direction="vertical" size="large" style={{ width: '100%', marginBottom: '24px' }}>
              <div>
                <Text strong>Body Font:</Text>
                <Text code style={{ marginLeft: '8px' }}>fontFamily</Text>
                <div style={{ fontFamily: customTheme.token.fontFamily, fontSize: '16px', marginTop: '8px' }}>
                  Source Sans 3 - The quick brown fox jumps over the lazy dog
                </div>
              </div>
              <div>
                <Text strong>Heading Font:</Text>
                <Text code style={{ marginLeft: '8px' }}>fontFamilyHeading</Text>
                <div style={{ fontFamily: customTheme.token.fontFamilyHeading, fontSize: '16px', marginTop: '8px' }}>
                  Space Grotesk - The quick brown fox jumps over the lazy dog
                </div>
              </div>
              <div>
                <Text strong>Code Font:</Text>
                <Text code style={{ marginLeft: '8px' }}>fontFamilyCode</Text>
                <div style={{ fontFamily: customTheme.token.fontFamilyCode, fontSize: '16px', marginTop: '8px' }}>
                  Space Grotesk Mono - const example = "Hello World";
                </div>
              </div>
            </Space>

            <Title level={4}>Font Sizes & Line Heights</Title>
            <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px' }}>
              {typographyData.map((typography) => (
                <TypographyExample
                  key={typography.level}
                  level={typography.level}
                  size={typography.size}
                  lineHeight={typography.lineHeight}
                  weight={typography.weight}
                  token={typography.token}
                >
                  {typography.level} - The quick brown fox jumps over the lazy dog
                </TypographyExample>
              ))}
            </div>

            <Title level={4}>Font Weights</Title>
            <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', marginBottom: '24px' }}>
              {fontWeights.map((weight) => (
                <div key={weight.token} style={{ marginBottom: '16px' }}>
                  <div style={{ 
                    fontWeight: weight.weight,
                    fontSize: '16px',
                    fontFamily: customTheme.token.fontFamily,
                    marginBottom: '8px'
                  }}>
                    {weight.name} - The quick brown fox jumps over the lazy dog
                  </div>
                  <Text code style={{ fontSize: '10px' }}>
                    {weight.token}: {weight.weight} (Source Sans 3)
                  </Text>
                </div>
              ))}
            </div>

            <Title level={4}>Line Heights</Title>
            <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px' }}>
              {lineHeights.map((lineHeight) => {
                const isHeading = lineHeight.name.includes('Heading');
                const fontFamily = isHeading ? customTheme.token.fontFamilyHeading : customTheme.token.fontFamily;
                
                return (
                  <div key={lineHeight.token} style={{ marginBottom: '16px' }}>
                    <div style={{ 
                      lineHeight: lineHeight.value,
                      fontSize: '16px',
                      fontFamily: fontFamily,
                      marginBottom: '8px',
                      border: '1px solid #f0f0f0',
                      padding: '8px',
                      borderRadius: '4px'
                    }}>
                      {lineHeight.name} - The quick brown fox jumps over the lazy dog. This is a longer example to demonstrate the line height spacing between multiple lines of text.
                    </div>
                    <Text code style={{ fontSize: '10px' }}>
                      {lineHeight.token}: {lineHeight.value} ({isHeading ? 'Space Grotesk' : 'Source Sans 3'})
                    </Text>
                  </div>
                );
              })}
            </div>

            <CodeBlock 
              copyText="theme.token.fontSizeHeading1" 
              itemId="typography-code"
            >
{`// Typography usage
const { theme } = useTheme();

// Font sizes
const h1Size = theme.token.fontSizeHeading1; // 38px
const h2Size = theme.token.fontSizeHeading2; // 30px
const h3Size = theme.token.fontSizeHeading3; // 24px
const h4Size = theme.token.fontSizeHeading4; // 20px
const h5Size = theme.token.fontSizeHeading5; // 16px
const bodySize = theme.token.fontSize; // 14px
const largeSize = theme.token.fontSizeLG; // 16px
const smallSize = theme.token.fontSizeSM; // 12px
const xlSize = theme.token.fontSizeXL; // 20px
const iconSize = theme.token.fontSizeIcon; // 12px

// Line heights
const h1LineHeight = theme.token.lineHeightHeading1; // 1.21
const h2LineHeight = theme.token.lineHeightHeading2; // 1.27
const h3LineHeight = theme.token.lineHeightHeading3; // 1.33
const h4LineHeight = theme.token.lineHeightHeading4; // 1.40
const h5LineHeight = theme.token.lineHeightHeading5; // 1.50
const bodyLineHeight = theme.token.lineHeight; // 1.57
const largeLineHeight = theme.token.lineHeightLG; // 1.50
const smallLineHeight = theme.token.lineHeightSM; // 1.67

// Font weights
const strongWeight = theme.token.fontWeightStrong; // 600

// Font families
const bodyFont = theme.token.fontFamily; // Source Sans 3
const headingFont = theme.token.fontFamilyHeading; // Space Grotesk
const codeFont = theme.token.fontFamilyCode; // Space Grotesk Mono`}
            </CodeBlock>
          </Panel>

          {/* Component Examples */}
          <Panel header="Component Examples" key="component-examples">
            <Title level={4}>Styled Components</Title>
            <Space wrap size="large" style={{ marginBottom: '24px' }}>
              {componentExamples.map((example) => (
                <div key={example.name} style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '8px' }}>{example.component}</div>
                  <Text code style={{ fontSize: '12px' }}>{example.name}</Text>
                </div>
              ))}
            </Space>

            <CodeBlock 
              copyText="ConfigProvider theme={customTheme}" 
              itemId="component-code"
            >
{`// Apply theme to your app
import { ConfigProvider } from 'antd';
import customTheme from './theme';

function App() {
  return (
    <ConfigProvider theme={customTheme}>
      <YourAppComponents />
    </ConfigProvider>
  );
}

// Access theme in components
import { useTheme } from 'antd';

function MyComponent() {
  const { token } = useTheme();
  
  return (
    <div style={{ 
      color: token.colorPrimary,
      fontSize: token.fontSize,
      fontFamily: token.fontFamily 
    }}>
      Styled content
    </div>
  );
}`}
            </CodeBlock>
          </Panel>

          {/* Theme Structure */}
          <Panel header="Theme Structure" key="theme-structure">
            <CodeBlock 
              copyText="customTheme" 
              itemId="theme-structure-code"
            >
{`// Complete theme structure
const customTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    // Font families
    fontFamily: FONT_FAMILY_BODY,
    fontFamilyCode: FONT_FAMILY_CODE,
    fontFamilyHeading: FONT_FAMILY_HEADING,
    
    // Semantic colors
    colorPrimary: 'rgba(10, 138, 138, 1)',
    colorSuccess: 'rgba(136, 184, 74, 1)',
    colorWarning: 'rgba(250, 173, 20, 1)',
    colorError: 'rgba(255, 77, 79, 1)',
    colorInfo: 'rgba(10, 138, 138, 1)',
    
    // Background colors
    colorBgBase: 'rgba(255, 255, 255, 1)',
    colorBgContainer: 'rgba(255, 255, 255, 1)',
    colorBgElevated: 'rgba(255, 255, 255, 1)',
    colorBgLayout: 'rgba(246, 246, 246, 1)',
    colorBgSpotlight: 'rgba(0, 0, 0, 0.85)',
    
    // Text colors
    colorText: 'rgba(0, 0, 0, 0.88)',
    colorTextSecondary: 'rgba(0, 0, 0, 0.65)',
    colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
    colorTextQuaternary: 'rgba(0, 0, 0, 0.25)',
    
    // Border colors
    colorBorder: 'rgba(217, 217, 217, 1)',
    colorBorderSecondary: 'rgba(240, 240, 240, 1)',
    
    // Fill colors
    colorFill: 'rgba(0, 0, 0, 0.15)',
    colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
    colorFillTertiary: 'rgba(0, 0, 0, 0.04)',
    colorFillQuaternary: 'rgba(0, 0, 0, 0.02)',
    
    // Complete color palettes (gold-0 to gold-9, cyan-0 to cyan-9, etc.)
    // All 12 palettes with 10 shades each (0-9)
    // Gold: gold-0 to gold-9
    // Cyan: cyan-0 to cyan-9  
    // Blue: blue-0 to blue-9
    // Green: green-0 to green-9
    // Magenta: magenta-0 to magenta-9
    // Orange: orange-0 to orange-9
    // Purple: purple-0 to purple-9
    // Red: red-0 to red-9
    // Volcano: volcano-0 to volcano-9
    // Yellow: yellow-0 to yellow-9
    // EDB: edb-0 to edb-9 (Primary brand)
    // Lime: lime-0 to lime-9
    
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
    Button: { fontFamily: FONT_FAMILY_BODY },
    Input: { fontFamily: FONT_FAMILY_BODY },
    Select: { fontFamily: FONT_FAMILY_BODY },
    Menu: { fontFamily: FONT_FAMILY_BODY },
    Table: { fontFamily: FONT_FAMILY_BODY },
    Card: { fontFamily: FONT_FAMILY_BODY },
    Modal: { fontFamily: FONT_FAMILY_BODY },
    Form: { fontFamily: FONT_FAMILY_BODY },
  },
};`}
            </CodeBlock>
          </Panel>
        </Collapse>
      </div>
    </ConfigProvider>
  );
};

export default Tokens;
