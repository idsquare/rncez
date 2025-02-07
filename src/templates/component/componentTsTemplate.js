module.exports = `import React from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';

interface TemplateNameProps{}

const TemplateName: React.FC = (props: TemplateNameProps) => (
  <div className={styles.TemplateName} data-testid="TemplateName">
    TemplateName Component
  </div>
);

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
`;
