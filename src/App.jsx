import './App.css'; 
import Event from './components/Event.jsx';
import MenuPage from './components/MenuPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="App">
      <div>
        <img src="https://heroic-pixie-6d7f91.netlify.app/awning.png" className='mainImg' alt="Remote" />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Food Truck Favorites 🤤</h1>
              <div className='flex-container'>
                <Event imgURL='https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg' eventName='Birria-Landia' eventDetails='Mexican'/>
                <Event imgURL='https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42' eventName='Mysttik Masala' eventDetails='Indian'/>
                <Event imgURL='https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024' eventName='The Halal Guys' eventDetails='Middle Eastern'/>
                <Event imgURL='https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg' eventName='NY Dosas' eventDetails='Vegetarian'/>
                <Event imgURL='https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg' eventName='Jerk Pan' eventDetails='Jamaican'/>
                <Event imgURL='https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg' eventName='Tong' eventDetails='Bangladeshi'/>
                <Event imgURL='https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg' eventName='King Souvlaki of Astoria' eventDetails='Greek'/>
                <Event imgURL='https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg' eventName="Ling's Sweet Mini Cakes" eventDetails='Chinese'/>
                <Event imgURL='https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg' eventName="Uncle Gussy's" eventDetails='Greek'/>
                <Event imgURL='https://live.staticflickr.com/8088/8400188739_53b16c7d13_z.jpg' eventName='Patacon Pisao' eventDetails='Venezuelan'/>
                <Event imgURL='https://infatuation.imgix.net/media/images/reviews/moms-momo/banners/1606245507.888788.png' eventName="Mom's Mono" eventDetails='Tibetan'/>
                <Event imgURL='https://fastly.4sqi.net/img/general/600x600/784042_29bZZHPGisHnWqyIuuXMo8D2zzW7QS6Hft7Vv15SH_I.jpg' eventName='Makina Cafe' eventDetails='Ethiopian'/>
              </div>
            </div>}
          />
          <Route path="/menu/:eventName" element={<MenuPage />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
