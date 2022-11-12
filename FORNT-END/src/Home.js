import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import './home.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.js';
const Home = () => {
    const [nasadate, setNasadate] = useState("");
    const [data, setData] = useState([]);

    const defaultdate = "2021-06-23"

    const getdata = async (e) => {
        try {
            e.preventDefault()
            console.log(",,,,,,,,,,", nasadate)
            const res = await axios.get(`http://192.168.1.6:8626/auth/view/${nasadate}`);
            console.log(res.data.data);
            setData(res.data.data);
        } catch (error) {
            console.log("errorr", error.response.data.message);
        }
        //   setDate(res.data.date);
    };
    const defualtdata = async () => {
        try {


            console.log("....", defaultdate)
            const res = await axios.get(`http://192.168.1.6:8626/auth/view/${defaultdate}`);
            console.log("......", res.data);
            setData(res.data.data);
        } catch (error) {
            // console.log("errorr",error.response.data.message);        
        }
        //   setDate(res.data.date);
    };
    function handle(e) {
        const newdata = { ...nasadate }
        newdata[e.target.name] = e.target.value
        setNasadate(newdata.nasadate)
        console.log("datee::", newdata)

    }


    useEffect(() => {
        console.log(".................hello")
        defualtdata()
    }, []);
    return (
        <>
            <div className='mainhome'>
                <h1>Astronomy Picture of the Day</h1>
                <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer</p>
                <form className='form-group'>
                    <input type="date" className='form-control' name='nasadate' onChange={(e) => handle(e)}></input>
                    <button onClick={(e) => getdata(e)}>Click</button>
                </form>
                <div className='image'>
                    <img src={data.hdurl} alt="not found"></img>
                </div>
                <div className='tit'>
                    <h3><b>{data.title}</b></h3>
                    <h4>Image Credit & <a href="lib/about_apod.html#srapply">Copyright</a> : <a href="mailto: ryan[DOT]hanyj[AT]gmail[DOT]com ">Ryan Han</a></h4>
                </div>
                <div className='explain'>
                    <p><b>Explanation:</b>{data.explanation}</p>
                </div>
            </div>


            <b> Lunar Eclipse of November 2022: </b>
            <a href="https://www.facebook.com/media/set/?set=a.154926410569278&amp;type=3">Notable Submissions to APOD</a><br />
            <b> Love Eclipses? (US): </b> Apply to become a <a href="https://astrosociety.org/education-outreach/amateur-astronomers/eclipse-ambassadors/program.html">NASA Partner Eclipse Ambassador</a><br />
            <b> Tomorrow's picture: </b>eclipse in the city

            <div className='links'>
                <hr />
                <a href="ap221110.html">&lt;</a>|
                <a href="archivepix.html">Archive</a>|
                <a href="lib/apsubmit2015.html">Submissions</a>|
                <a href="lib/aptree.html">Index</a>|
                <a href="https://antwrp.gsfc.nasa.gov/cgi-bin/apod/apod_search">Search</a>|
                <a href="calendar/allyears.html">Calendar</a>|
                <a href="/apod.rss">RSS</a>|
                <a href="lib/edlinks.html">Education</a>|
                <a href="lib/about_apod.html">About APOD</a>|
                <a href="http://asterisk.apod.com/discuss_apod.php?date=221111">Discuss</a>|
                <a href="ap221112.html">&gt;</a>
                <hr />
            </div>
            <div className='bottam'>
                <b> Authors &amp; editors: </b>
                <a href="http://www.phy.mtu.edu/faculty/Nemiroff.html">Robert Nemiroff</a><a href="http://www.phy.mtu.edu/">(MTU)</a>&<a href="https://antwrp.gsfc.nasa.gov/htmltest/jbonnell/www/bonnell.html">Jerry Bonnell</a><a href="http://www.astro.umd.edu/">(UMCP)</a>
                <b>NASA Official: </b>
                <p>
                <b> Authors &amp; editors: </b>
                    <a href="http://www.phy.mtu.edu/faculty/Nemiroff.html">Robert Nemiroff</a>
                    (<a href="http://www.phy.mtu.edu/">MTU</a>) &amp;
                    <a href="https://antwrp.gsfc.nasa.gov/htmltest/jbonnell/www/bonnell.html">Jerry Bonnell</a> (<a href="http://www.astro.umd.edu/">UMCP</a>)<br/>
                        <b>NASA Official: </b> Phillip Newman
                        <a href="lib/about_apod.html#srapply">Specific rights apply</a>.<br />
                        <a href="https://www.nasa.gov/about/highlights/HP_Privacy.html">NASA Web
                            Privacy Policy and Important Notices</a><br />
                        <b>A service of:</b>
                        <a href="https://astrophysics.gsfc.nasa.gov/">ASD</a> at
                        <a href="https://www.nasa.gov/">NASA</a> 
                        <a href="https://www.nasa.gov/centers/goddard/">GSFC</a>
                        <br/> <a href="https://science.nasa.gov/learners">NASA Science Activation</a>
                            <br/><b>&amp;</b> <a href="http://www.mtu.edu/">Michigan Tech. U.</a><br />
                </p>
            </div>
        </>
    );
}

export default Home;
