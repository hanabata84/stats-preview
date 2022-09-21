import React from 'react'
import heroImg from './assets/hero-img-bg.png'

const Stats = () => {
    const style = {
        mainCont: `xl:flex xl:w-[1161px] xl:h-[488px]
            w-[342px] h-[920px] bg-bgPurple rounded-[10px]`,
        image: `xl:order-last xl:bg-right xl:rounded-tl-none xl:rounded-r-[10px]
            rounded-t-[10px]`,
        cont: `xl:items-start xl:mx-[75px] xl:mt-[10px]
            mt-[37px] mx-[23px] flex flex-col justify-center items-center text-center`,
        heading: `xl:leading-[46px] xl:text-left xl:text-[38px]
            mb-5 text-[32px] font-bold`,
        text: `xl:mb-[30px] xl:ml-0 xl:mr-16 xl:text-left
            text-primeGray mx-3`,
        contSm: `xl:flex xl:justify-between xl:w-[399px]`,
        heading2: `text-[32px] font-bold mt-[30px]`
    }
    return (
        <div className={style.mainCont}>
            <img className={style.image} src={heroImg} alt="/" />
            <div className={style.cont}>
                <h1 className={style.heading}>Get <span className='text-bgPink'>insights</span> that help your business grow.</h1>
                <p className={style.text}>
                    Discover the benefits of data analytics and make better decisions regarding revenue,
                    customer experience, and overall efficiency.
                </p>
                <div className={style.contSm}>
                    <div>
                        <h2 className={style.heading2}>10k+</h2>
                        <p className='text-primeGray'>COMPANIES</p>
                    </div>
                    <div>
                        <h2 className={style.heading2}>314</h2>
                        <p className='text-primeGray'>TEMPLATES</p>
                    </div>
                    <div>
                        <h2 className={style.heading2}>12M+</h2>
                        <p className='text-primeGray'>QUERIES</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats