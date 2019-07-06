import Typography from 'typography';
import githubTheme from 'typography-theme-github';

githubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2': {
    border: 'none',
  },
  'article, p': {
    font:
      "100%/1.5 -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'; box-sizing: border-box;",
  },
});

const typography = new Typography(githubTheme);

export default typography;
