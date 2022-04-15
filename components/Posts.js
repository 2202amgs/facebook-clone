import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from "../firebase"
import Post from "./Post";

function Posts()  {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, orderBy('timestamp', 'desc'));
    const [posts] =useCollection(q, {
      snapshotListenOptions: { includeMetadataChanges: true },
    });
 
  return (
    <div> 
      {posts?.docs.map((post) => 
        <Post
          key={post.id}
          name={post.data().name}
          email={post.data().email}
          message={post.data().message}
          timestamp={post.data().timestamp}
          postImage={post.data().photo}
          image={post.data().image}
        />
      )}
    </div>
  )
}

export default Posts