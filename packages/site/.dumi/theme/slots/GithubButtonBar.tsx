import React from 'react';
import GitHubButton from 'react-github-btn'

const GitHubButtonBar: React.FC<any> = ({ readingTime }) => {
  return <div style={{float: 'right',display: 'flex',gap:'10px'}}>
    <GitHubButton href="https://github.com/antvis/l7/discussions" data-icon="octicon-comment-discussion" data-size="large" data-show-count="true" aria-label="Discuss antvis/l7 on GitHub">技术讨论区</GitHubButton>
    <GitHubButton href="https://github.com/antvis/L7/issues/new" data-icon= 'octicon-issue-opened' data-size="large" data-show-count="true" aria-label="Issue antvis/l7 on GitHub">反馈问题</GitHubButton>
    <GitHubButton href="https://github.com/antvis/l7" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star antvis/l7 on GitHub">关注项目</GitHubButton>
     </div>
};

export default GitHubButtonBar;
