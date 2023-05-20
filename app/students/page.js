import BackgroundImage from "@/app/Components/BackgroundImage/BackgroundImage";
import PageHeadline from "@/app/Components/PageHeadline/PageHeadline";
import Gallery from "@/app/Components/Gallery/Gallery";
import AnimatedLayout from "@/app/Components/AnimatedLayout/AnimatedLayout";

import {data} from "@/app/students/data";

export const metadata = {
    title: 'Наші учні'
}

const Students = props => {
    return (
        <>
            <BackgroundImage
                img="/bg7.jpg"
                opacity={0.5}
            />
            <AnimatedLayout>
                <PageHeadline>Наші учні</PageHeadline>
                <Gallery
                    items={data}
                    aspectRatio="0.75"
                />
            </AnimatedLayout>
        </>
    )
}


export default Students;