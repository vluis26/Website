import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';

function Portfolio(){
    return (
        <div className='flex items-center justify-center flex-col mb-5 mx-auto'>    
            <Title>Side Projects</Title>
        
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
                {portfolio.map(project => (
                    <PortfolioItem
                    imgUrl={project.imgUrl}
                    title={project.title}
                    description={project.description}
                    stack={project.stack}
                    />
                ))}
            </div>
        </div>
    )
}

// className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 add this after a second project
export default Portfolio;