import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';

const socialList = [
    {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
    },
    {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
    },
    {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
    },
    {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
    },
    {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
    },
    ];
    

const SingleBlog = () => {
    const[blog,setBlog] = useState(blogList);
    const {id} = useParams()
    const result = blog.filter((b) => b.id === Number(id))
  return (
    <div>
      <PageHeader title={"Single Blog Page"} curPage={"Blog/Blog Details"}/>
      <div className='blog-section blog-single padding-tb section-bg'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-8 col-12'>
                    <article>
                        <div className='section-wrapper'>
                            <div className='row row-cols-1 justify-content-center g-4'>
                                <div className='col'>
                                    <div className='post-item style-2'>
                                        <div className='post-inner'>
                                            {
                                                result.map((item) => (
                                                    <div key={item.id}>
                                                        <div className='post-thumb'>
                                                            <img src={item.imgUrl} alt="" className='w-100'/>
                                                        </div>
                                                        <div className='post-content'>
                                                            <h3>{item.title}</h3>
                                                            <div className='meta-post'>
                                                                <ul className='lab-ul'>
                                                                    {
                                                                        item.metaList.map((val,i) => (
                                                                            <li key={i}>
                                                                                <i className={val.iconName}></i>
                                                                                {" "} {val.text}
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </div>


                                                            <p>
                                                            If you’re new to the world of ecommerce, you’re likely hustling to learn about product sourcing, inventory management, marketing automation, running ads, and customer service optimization. Thankfully, the internet is full of wisdom from seasoned experts with proven success. Let’s look at 14 top ecommerce blogs to check out on your way to running a successful online store.      
                                                            </p>
                                                            <blockquote>
                                                                    <p>The blog is full of practical ecommerce guides to email marketing, conversion optimization, customer success practices, and social marketing. Their Growth Stories are about big brands with proven success — a great resource for inspiration and tips to help you grow your business.</p>
                                                            <cite><a href="#">...Hamilpur Rohit</a></cite>
                                                                    </blockquote>
                                                                    <p>blog shares top-notch advice on building customer loyalty and engagement through user-generated content marketing — content created by customers, including testimonials, tweets, videos, etc.</p>
                                                                    <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                                                    <p>For dropshippers, the Oberlo blog is one of the most credible and informative resources out there. Unlike other types of ecommerce businesses, dropshipping requires regularly updated insights on trending products, social media advertising, and conversion optimization.</p>
                                                                    <div className='video-thumb'>
                                                                        <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                        <a href="https://youtu.be/-ZAznOtqaiY?feature=shared" className='video-button popup'>
                                                                            <i className='icofont-ui-play'></i>
                                                                        </a>
                                                                    </div>
                                                                    <p>Founded by the famous web entrepreneur and storyteller Noah Kagan (read his amazing stories at OkDork.com), Sumo has evolved from a set of list-building tools for general sites to a comprehensive marketing platform for ecommerce sites. Sumo Stories is a top-notch ecommerce blog where the team shares growth stories, advanced marketing lessons, and tips for increasing conversion rates through email marketing.</p>
                                                                    <div className='tags-section'>
                                                                        <ul className='tags lab-ul'>
                                                                            <li>
                                                                                <a href="#" >Agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" >Business</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" >Personal</a>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className='lab-ul social-icons'>
                                                                            {
                                                                                socialList.map((val,i) => (
                                                                                    <li key={i}>
                                                                                        <a href="#" className={val.className}>
                                                                                        <i className={val.iconName}></i></a>
                                                                                    </li>
                                                                                   
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                    </div> 
                                                    </div>


                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="navigations-part">
                                    <div className='left'>
                                            <a href="#" className='prev'>
                                            <i className='icofont-double-left'></i>
                                            Previous Article
                                            </a>
                                            <a href="#" className='title'>
                                            Euisculate parallel process via Technica Sounds model Authorizations
                                            </a>
                                    </div>
                                    <div className='right'>
                                            <a href="#" className='next'>
                                            <i className='icofont-double-right'></i>
                                            Next Article
                                            </a>
                                            <a href="#" className='title'>
                                            Technica Sounds model Authorizations Euisculate parallel processed
                                            </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </article>
                </div>
                <div className='col-lg-4 col-12'>
                    <aside>
                        <Tags/>
                        <PopularPost/>                      
                    </aside>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
