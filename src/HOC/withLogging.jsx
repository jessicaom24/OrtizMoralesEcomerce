import React, { useEffect } from 'react';

const withLogging = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log(`[withLogging] Componente montado: ${WrappedComponent.name}`);
      return () => {
        console.log(`[withLogging] Componente desmontado: ${WrappedComponent.name}`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withLogging;
