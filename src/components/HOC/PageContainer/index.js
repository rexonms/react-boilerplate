import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loading from './../../Loading/';
import ErrorBox from '../../Error/index';
import { setAnalyticsPageView } from '../../../utils/ga';
import styles from './pageContainer.scss';

class PageContainer extends Component {
  constructor() {
    super();
    this.getComponent = this.getComponent.bind(this);
  }
  componentDidMount() {
    setAnalyticsPageView(this.props.pageName);
    if (this.props.containerData) {
      this.props.action();
    }
  }
  /**
   * Checks if data is required
   * If the component has no data at all then it triggers action that fetches data
   * Once the data is returned and app state is updated via Redux
   * Then the component either the child component or the Error component
   * @returns {XML}
   */
  getComponent() {
    const { containerData } = this.props;
    if (Object.keys(containerData).length === 0 && containerData.constructor === Object) {
      return <Loading />;
    }
    if (containerData.data.error) {
      return <ErrorBox />;
    }
    return this.props.children;
  }

  render() {
    return (
      <section className={styles.container}>
        <div className={styles.page}>
          {this.getComponent()}
        </div>
      </section>
    );
  }
}

PageContainer.defaultProps = {
  containerData: ({
    error: <ErrorBox />,
  }),
};

PageContainer.propTypes = {
  pageName: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  containerData: PropTypes.shape({
    error: PropTypes.element,
  }),
  children: PropTypes.element.isRequired,
};

export default PageContainer;
