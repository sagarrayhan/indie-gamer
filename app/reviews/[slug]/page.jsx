import React from 'react';
import { getReviews, getSlugs, readData } from '@/lib/reviews';
import Header from '@/app/components/Header';
import ShareLink from '@/app/components/ShareLink';



export async function generateMetadata({params:{slug}}){
    const review = await readData(slug)

    return {title : review.title}
}

const page = async ({params:{slug}}) => {
     
    const files =await readData(slug);

    return (
        <div>
            <Header>{files.title}</Header>
            <div>
            <p>{files.date}</p>
            <ShareLink/>
            </div>
            <img src={`/images/${slug}.jpg`} width="640" height="360"/>
            <article className='prose prose-slate' dangerouslySetInnerHTML={{__html:(await files).body}} />
        </div>
    );
};

export default page;