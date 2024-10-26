import './Home.css';
import sampleImage from '../../../public/555.jpg';

function Home() {
    return (
        <div className='home-container'>
            {/* สติกเกอร์ด้านบนซ้าย */}
            <div className='sticker-left'>
                <i className="bi bi-stars"></i>
            </div>

            {/* สติกเกอร์ด้านบนขวา */}
            <div className='sticker-right'>
                <i className="bi bi-stars"></i>
            </div>

            <h1>My Safe Space</h1>

            <img src={sampleImage} className="img-fluid rounded-circle home-img" alt="My Safe Space" />

            <p className='btn btn-warning'>
                สวัสดีทุกท่าน! ผมชื่อ เมธาพร ทองนาค อายุ 20 ปี เป็นคนที่สนใจในเทคโนโลยี
                และตอนนี้ผมกำลังทำงานหรือศึกษาเกี่ยวกับ IT.
            </p>

            <p className='btn btn-warning'>
                ผมชอบใช้เวลาว่าง<br />
                &nbsp;&nbsp;<span className="bi bi-dash-circle-fill list-icon">การอ่านหนังสือ </span><br />
                &nbsp;&nbsp;&nbsp;&nbsp; <span className="bi bi-dash-circle-fill list-icon">การออกกำลังกาย และ</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<span className="bi bi-dash-circle-fill list-icon">มักจะตั้งเป้าหมายในการพัฒนาตัวเองอยู่เสมอ</span> <br />
               &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;<span>ขอบคุณที่เข้ามาทำความรู้จักกันครับ!</span>
            </p>
            <div className='sticker'>
                <i className="bi bi-stars"></i>
            </div>
        </div>
    );
}

export default Home;