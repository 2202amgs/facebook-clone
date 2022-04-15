import { async } from "@firebase/util";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { addDoc, collection, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRef, useState } from "react";
import { db, storage } from "../firebase";


function InputBox() {
    const { data } = useSession();
    const inputRef = useRef(null);
    const filePicker = useRef(null);
    const [imageToPost, setImageToPost] = useState(null)
    const [file, setFile] = useState(null)
    const setPost = (e) => {
        e.preventDefault();
        if(!inputRef.current.value) return;
        addDoc(collection(db,'posts'),{
            message: inputRef.current.value,
            name: data.user.name,
            email: data.user.email,
            image: data.user.image,
            timestamp: Date.now(),
        }).then( (doc)=>{
            if(imageToPost){
                const storageRef = ref(storage, `posts/${doc.id}`);
                const metadata = {
                    contentType: 'image/jpeg',
                  };
                uploadBytes(storageRef, file, metadata).then(()=>{
                    getDownloadURL(storageRef).then((url)=> {
                        setDoc(doc,{
                            photo: url,
                        },{merge: true});
                    });
                });
            }
            
        });
        
        inputRef.current.value = '';
        removeImage();
    }
    const addImageToPost = (e)=>{
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
            setFile(e.target.files[0]);
        }
        reader.onload = (readEvent)=>{
            setImageToPost(readEvent.target.result);
        }
        
    }
  
    const removeImage = (e)=>{
        setImageToPost(null);
    };
    const d = ()=> {
        console.log(imageToPost);
    }
    return (
        <div className="bg-white p2 rounded-2xl shadow-md mt-6 text-gray-500 font-medium">
            <div className="flex space-x-4 p-4 items-center">
                <Image
                    className="rounded-full"
                    alt=''
                    src={data.user.image}
                    width={40}
                    height={40}
                    layout='fixed'
                />
                <form className="flex flex-1">
                    <input
                        className="rounded-full h-12 bg-gray-100 p-5 focus:outline-none flex-grow"
                        placeholder={`what's on your mind, ${data.user.name}`}
                        ref={inputRef}
                    />
                    <button hidden type="submit" onClick={setPost}>Submit</button>
                </form>
                {imageToPost && <div onClick={removeImage} className='flex flex-col filter hover:brightness-110 cursor-pointer hover:scale-105 transition duration-150  transform'>
                    <img alt='' src={imageToPost} className='h-10 object-contain ' />
                    <p className="text-red-500 text-center text-xs">Remove</p>
                </div>}
            </div>
            <div className="flex p-3 border-t justify-between">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-sm xl:text-base">Live Video</p>
                </div>
                <div onClick={()=> filePicker.current.click()} className="inputIcon">
                    <CameraIcon className="h-7 text-green-400" />
                    <p className="text-sm xl:text-base">Photo/Video</p>
                    <input
                        ref={filePicker}
                        onChange={addImageToPost}
                        hidden type='file'
                    />
                </div>
                <div className="inputIcon" onClick={d}>
                    <EmojiHappyIcon className="h-7 text-yellow-300" />
                    <p className="text-sm xl:text-base">Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}



export default InputBox