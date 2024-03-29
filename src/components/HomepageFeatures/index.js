import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Hyperfast Exo bridge',
    Svg: require('@site/static/img/rocketman.svg').default,
    description: (
      <>
        Exoswap bridge enables the processing of cross-EVM L1/L2 transactions at a remarkably fast pace, providing enhanced security and cost-effectiveness.
      </>
    ),
  },
  {
    title: 'Powered by Stratos EVM',
    Svg: require('@site/static/img/blockchain.svg').default,
    description: (
      <>
        Stratos EVM is employed to facilitate smart contract transactions, leveraging the Tendermint layer to achieve greater efficiency and better performance.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
