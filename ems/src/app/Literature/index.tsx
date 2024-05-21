import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from './Layout';
import HowItWorks from '../../components/Pages/Literature/HowItWorks';
import JustForToday from '../../components/Pages/Literature/JustForToday';
import TwelveTraditions from '../../components/Pages/Literature/TwelveTraditions';
import WeDoRecover from '../../components/Pages/Literature/WeDoRecover';
import WhatIsTheNAProgram from '../../components/Pages/Literature/WhatIsTheNAProgram';
import WhoIsAnAddict from '../../components/Pages/Literature/WhoIsAnAddict';
import WhyAreWeHere from '../../components/Pages/Literature/WhyAreWeHere';

const components = {
  'who-is-an-addict': WhoIsAnAddict,
  'what-is-the-na-program': WhatIsTheNAProgram,
  'why-are-we-here': WhyAreWeHere,
  'how-it-works': HowItWorks,
  'just-for-today': JustForToday,
  'twelve-traditions': TwelveTraditions,
  'we-do-recover': WeDoRecover,
  
  
  
};

const Literature: React.FC = () => {
  const router = useRouter();
  const { component } = router.query;
  const [selectedComponent, setSelectedComponent] = useState<keyof typeof components>('how-it-works');

  useEffect(() => {
    if (component && typeof component === 'string' && Object.keys(components).includes(component)) {
      setSelectedComponent(component as keyof typeof components);
    } else {
      setSelectedComponent('how-it-works');
    }
  }, [component]);

  const ComponentToRender = components[selectedComponent];

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <ComponentToRender />
      </div>
    </Layout>
  );
};

export default Literature;
