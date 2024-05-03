import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
import Login from "./login.jsx"; 

const Main = () => {
    const {
        onSent,
        recentPrompt,
        showResults,
        loading,
        resultData,
        setInput,
        input,
    } = useContext(Context);

    // State to manage whether the login component should be displayed
    const [showLogin, setShowLogin] = useState(false);

    const handleCardClick = (promptText) => {
        setInput(promptText);
    };

    return (
        <div className="main">
            <div className="nav">
                <p>RigKatha</p>
                {/* When the user icon is clicked, toggle the state to show/hide the login component */}
                <img src={assets.user} alt="" onClick={() => setShowLogin(!showLogin)} />
            </div>
            <div className="main-container">
                {/* Render the login component if showLogin is true */}
                {showLogin && <Login />}
                {!showResults ? (
                    <>
                        <div className="greet">
                            <p>
                                <span>Hello there! Rig here </span>
                            </p>
                            <p>How Can I Help You Today?</p>
                        </div>
                        <div className="cards">
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick("Suggest Some Place To Visit In Kerala")
                                }
                            >
                                <p>Suggest Some Place To Visit In Kerala </p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick(
                                        "Brainstorm team bonding activities for our work retreat"
                                    )
                                }
                            >
                                <p>Brainstorm team bonding activities for our work retreat </p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick("How to Create a Gyroscope using Disc?")
                                }
                            >
                                <p>How to Create a Gyroscope using Disc?</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() => {
                                    handleCardClick(
                                        "Create a Script for the youtube video about coding "
                                    );
                                }}
                            >
                                <p>Create a Script for the youtube video about coding </p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => {
                                setInput(e.target.value);
                            }}
                            value={input}
                            type="text"
                            placeholder="Enter the Prompt Here"
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img
                                src={assets.send_icon}
                                alt=""
                                onClick={() => {
                                    onSent();
                                }}
                            />
                        </div>
                    </div>
                    <div className="bottom-info">
                        <p>
                            RigKatha may display inaccurate info, including about people, so
                            double-check its responses. Your privacy & Gemini Apps
                        </p>
                    </div>
                </div>
            </div>
            {/* Ellipse background */}
            <div className="ellipse"></div>
        </div>
    );
};

export default Main;
