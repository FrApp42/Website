import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({id: 'homepage.features.openSource.title', message: 'Open Source'}),
    Svg: require('@site/static/img/undraw_open_source.svg').default,
    description: (
      <>
        <Translate id="homepage.features.openSource.description">
          Our goal is to create Open Source projects widely accessible for any type of projects.
        </Translate>
      </>
    ),
  },
  {
    title: translate({id: 'homepage.features.community.title', message: 'Community-Driven'}),
    Svg: require('@site/static/img/undraw_community.svg').default,
    description: (
      <>
        <Translate id="homepage.features.community.description">
          Our projects want to be driven by a vibrant community of contributors and users. Join us to collaborate and innovate together.
        </Translate>
      </>
    )
  },
  {
    title: translate({id: 'homepage.features.documented.title', message: 'Highly Documented'}),
    Svg: require('@site/static/img/undraw_my_documents.svg').default,
    description: (
      <>
        <Translate id="homepage.features.documented.description">
          Comprehensive documentation is provided to help you get started quickly and understand our projects in depth.
        </Translate>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
