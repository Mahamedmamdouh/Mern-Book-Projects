import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';
import thumbnail from '../assets/banner-books/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="bg-white w-1/2 mx-auto py-8">
      <div className="container post-detail__container">
        <div className="flex justify-between mb-6">
          <PostAuthor/>
          <div className="post-detail__button flex gap-4 items-center">
          <Link to={'/posts/werwer/edit'} className='inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300'>Edit</Link>
          <Link to={'/posts/werwer/delete'} className='inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300'>Delete</Link>
          </div>
          
        </div>
        <h1>This is the post title</h1>
        <div className="my-4 max-h-96 overflow-hidden">
          <img src={thumbnail} alt=""  className="w-full h-full object-cover" />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta assumenda unde facilis! Cumque hic, facilis dolore debitis provident ipsum vel nostrum, velit iste perferendis soluta accusamus ducimus ipsam voluptatem et nulla rerum tempora? Error facilis quos non commodi, unde iure!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, optio itaque molestiae, temporibus laborum tempore illo adipisci nisi rem laudantium a omnis vero ea. Eos, fuga? Quibusdam consequuntur quaerat temporibus, optio sequi modi repudiandae velit voluptatibus itaque cum cumque, voluptas quis! Molestias et suscipit possimus magni alias modi ipsa perferendis.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, hic est tempore omnis odio nulla fugiat nam illum, adipisci veritatis veniam quidem illo eligendi, earum dolores minima expedita atque delectus excepturi corporis neque! Rerum eveniet ducimus hic atque, iste obcaecati nulla dolores molestias. Ducimus labore illo possimus id ut fuga totam alias dolores? Harum totam laudantium aspernatur, ipsa iste numquam deleniti laboriosam modi amet hic ratione. Maiores adipisci veniam obcaecati sit dolorem, accusantium quasi, nisi ipsam nesciunt, vitae esse fuga! Sed nulla debitis ab suscipit? Laboriosam eius aliquid ea? Porro aliquam reprehenderit exercitationem? Explicabo placeat dolores pariatur voluptate eos, repellat dolorum exercitationem a eligendi assumenda, quis velit deserunt, dicta beatae.
        </p>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime doloribus similique ipsum dolorum nam amet facere repellat delectus magni asperiores!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic magnam obcaecati quas fugiat molestiae. Similique, maxime dolor. Quaerat impedit, perspiciatis, vel repellendus mollitia optio qui natus ipsam facere dolores distinctio, nulla dicta sit illum? Ea reiciendis recusandae, earum, minima, id aspernatur similique consequatur enim fuga dicta itaque? Obcaecati veniam nemo a impedit deserunt in repudiandae consequuntur iusto possimus facere quisquam, soluta illum accusamus repellendus. Alias ipsa nihil, ullam in dolorum ea, aperiam amet sit, iusto voluptates itaque quibusdam ut cupiditate doloribus reiciendis! Esse distinctio, illum alias iste molestiae tempore dignissimos excepturi deleniti temporibus, harum accusantium mollitia saepe eaque blanditiis quaerat natus maiores! Odio, quam error blanditiis voluptatibus quaerat sit natus fugiat nulla perferendis delectus ea voluptates beatae commodi voluptatem, necessitatibus dolore asperiores adipisci voluptatum, hic rerum vitae repellat quod aut vero. Consequuntur at vero delectus asperiores quo perspiciatis quidem nesciunt autem exercitationem hic debitis, dolorum quasi repellat iusto quibusdam dignissimos consequatur. Aliquam quia, doloribus cum quaerat non ea in temporibus? Quidem quia numquam voluptatem quo fuga adipisci voluptatibus porro blanditiis ex vel molestias, dicta praesentium similique libero, deserunt, autem sapiente eius accusantium incidunt? Expedita commodi consequatur nesciunt. Aut, amet saepe totam alias quas consequuntur deleniti ea, corporis, numquam quis qui!
        </p>
       
      </div>

    </section>
  )
}

export default PostDetail