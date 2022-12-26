import React from 'react';
import BlogBanner from '../../components/BlogBanner/BlogBanner';
import CardTailwindCss from '../../components/CardTailwindCss/CardTailwindCss';
import BlogSideNav from '../../components/BlogSideNav/BlogSideNav';
import SideNavHeader from '../../components/SideNavHeader/SideNavHeader';
import BlogNavBar from '../../components/BlogNavBar/BlogNavBar';

const Blog = () => {
    return (
        <div>
            <BlogBanner />
            <BlogNavBar/>
            <div className=' md:flex justify-between mx-auto container'>
                <div className=' h-full flex-3'>
                    <SideNavHeader/>
                     <BlogSideNav/>
                </div>
                <div className='h-full w-full '>
                     <CardTailwindCss />
                     <CardTailwindCss />
                     <CardTailwindCss />
                     <CardTailwindCss />
                </div>
            </div>
           
        </div>
    );
};

export default Blog;