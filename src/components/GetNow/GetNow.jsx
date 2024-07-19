import React, {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {useForm} from "react-hook-form";
import Image10 from '../../assets/images/Image10.png';
import Loader from "../Loader/Loader.jsx";
import classes from './GetNow.module.css';

function GetNow(){

    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, reset, formState: { errors }  } = useForm({
        defaultValues: {
            name: '',
            email: '',
            phone_number: '',
        },
        mode: "onSubmit",
    });

    const saveData = (data) => {
        postForm(data);
        reset();
    };


    let postForm =async (data) => {
        let formData = new FormData();
        formData.append('name', data?.name);
        formData.append('email', data?.email);
        formData.append('phone_number', data?.phone_number);
        setIsLoading(true)
        try {
            let response = await axios.post(`http://app.highpricesale.com/api/send/contact`, formData
            )
            if(response.data=== "success"){
                toast.success("Sent successfully!")
                setIsLoading(false)
            }
        } catch (error) {
            setIsLoading(false)
            toast.error(
        error.response?.data.message || "Something went wrong."
            )
        }
    }

    if (isLoading) return <Loader/>;
    return(
        <div className={classes.whole}>
            <div className='container'>
                <div className={classes.inside}>
                    <div className={classes.left}>
                        <img src={Image10} alt={""}/>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.title}>To Secure Your Participation in My Unique Highest Price Program
                            and GUARANTEE the Sale of Your Home in Just 19 Days  for 5.25% MORE MONEY...</div>
                        <div>
                            <div className={classes.redTitle}>Call Me RIGHT NOW at 717-471-2910</div>
                        </div>
                        <div className={classes.subTitle}>Download Your Free copy of  “The 3 Deadly Pitfalls that Can
                            COST you <span className={classes.subTitleUnderlined}>THOUSANDS</span>  (or more)  When You
                            SELL Your Home”</div>
                        <div className={classes.subTitle}>Simply Enter Our Name and Email below  and Claim Your
                            <span className={classes.subTitleBold}> FREE </span>
                            <span className={classes.subTitleUnderlined}>Copy Instantly!</span>
                        </div>
                        <form onSubmit={handleSubmit(saveData)}>
                            <div className={classes.inputDiv}>
                                <input
                                    className={`${classes.inputStyle} ${errors.name && classes.invalid}`}
                                    {...register("name", {
                                        required: 'Name is required'
                                    })}
                                    placeholder="Name"
                                />
                                {errors.name && <span className={classes.error}>{errors.name.message}</span>}
                            </div>
                            <div className={classes.inputDiv}>
                                <input
                                    className={`${classes.inputStyle} ${errors.email && classes.invalid}`}
                                    {...register("email", {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    placeholder="Email"
                                />
                                {errors.email && <span className={classes.error}>{errors.email.message}</span>}
                            </div>
                            <div className={classes.inputDiv}>
                                <input
                                    className={`${classes.inputStyle} ${errors.phone_number && classes.invalid}`}
                                    {...register("phone_number", {
                                        required: 'Phone number is required',
                                    })}
                                    placeholder="Phone number"
                                />
                                {errors.phone_number && <span className={classes.error}>{errors.phone_number.message}</span>}
                            </div>
                            <button className={classes.getBtn}>Get now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetNow;