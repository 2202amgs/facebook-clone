import Image from "next/image"
import {ChatAltIcon, ShareIcon, ThumbUpIcon} from "@heroicons/react/outline"

function Post({name, message, email, postImage, image, timestamp}) {
  return (
    <div className="flex flex-col">
        {/* header */}
        <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
            <div className="flex items-center space-x-2">
                <Image
                    src={image}
                    height={40}
                    width={40}
                    alt=""
                    className="rounded-full"
                />
                <div className="">
                    <p className="font-medium">{name}</p>
                    <p className="text-sm text-gray-400">{new Date(timestamp).toLocaleString()}</p>
                </div>
            </div>
            <p className="pt-4">{message}</p>
        </div>
        {/* photo */}
        {postImage&& (
            <div className="relative h-56 md:h-96">
                <Image alt="" src={postImage} objectFit='cover' layout="fill" />
            </div>
        )}
        {/* footer */}
        <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
            <div className="inputIcon rounded-bl-2xl">
                <ThumbUpIcon className="h-4"/>
                <p className="text-xs sm:text-base">Like</p>
            </div>
            <div className="inputIcon">
                <ChatAltIcon className="h-4"/>
                <p className="text-xs sm:text-base">Comment</p>
            </div>
            <div className="inputIcon rounded-br-2xl">
                <ShareIcon className="h-4"/>
                <p className="text-xs sm:text-base">Share</p>
            </div>
        </div>
    </div>
  )
}

export default Post