import Image from 'next/image'
import { Separator } from './ui/separator'

export const PostsSection = () => {
    const SidePost = () => {
        return (
            <div className="text-white py-2 grid grid-cols-5">
                <div className="col-span-3 flex flex-col">
                    <h3 className="text-lg font-semibold">Post Title</h3>
                    <p className="text-md text-neutral-500 dark:text-neutral-400">Short description of the post.</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Posted on January 1, 2024</p>
                </div>
                <div className="col-span-2">
                    <div className="rounded-lg overflow-hidden relative">
                        <div className="aspect-video">
                            <Image
                                alt="Post thumbnail"
                                src="/placeholder.svg"
                                fill={true}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
                <Separator className="border border-neutral-800 col-span-5"/>
            </div>
        )
    }

    return (
        <section>
            <div className="container p-4">
                <h1 className="text-4xl text-white p-4">Posts</h1>
                <div className="md:grid md:grid-cols-9 md:grid-rows-3">
                    <div className="row-span-3 md:col-span-4 text-white py-2 px-4 md:order-last">
                        <div className="rounded-lg overflow-hidden relative">
                            <div className="aspect-video">
                                <Image
                                    alt="Video thumbnail"
                                    src="/placeholder.svg"
                                    fill={true}
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold mt-4">Post Title 1</h3>
                        <p className="text-md text-neutral-500 dark:text-neutral-400">Short description of the post.</p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">Posted on January 1, 2024</p>
                        <Separator className="border border-neutral-800 w-full my-4"/>
                    </div>
                    <div className="px-4 col-span-5 row-span-3">
                        <SidePost />
                        <SidePost />
                        <SidePost />
                    </div>
                </div>
            </div>
        </section>
    )
}