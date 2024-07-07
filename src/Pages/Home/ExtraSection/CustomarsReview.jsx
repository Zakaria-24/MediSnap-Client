const CustomarsReview = () => {
    return (
            <section className=" container mx-auto px-4 lg:px-0 py-10">
                <h1 className='ml-8 flex justify-center text-3xl font-bold py-8'>What Customars say about us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4">
                        <h3 className="text-xl font-semibold">Experties and Compassion Combined</h3>
                        <p>I can not thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                        <div className="flex gap-4 my-4">
                            <img src="https://i.ibb.co/NFHL0dd/Ellipse-2.png" alt="img"/>
                            <div>
                                <h5 className="font-bold">Sarah walkimen</h5>
                                <div className="rating rating-xs">
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-50 p-4">
                        <h3 className="text-xl font-semibold">Unique Experience</h3>
                        <p>My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                        <div className="flex gap-4 my-4">
                            <img src="https://i.ibb.co/Gt45YGW/Ellipse-10-2.png" alt="img"/>
                            <div>
                                <h5 className="font-bold">Kevin Petersen</h5>
                                <div className="rating rating-xs">
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-50 p-4">
                        <h3 className="text-xl font-semibold">A Partner in Health and Wellness</h3>
                        <p>As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups.</p>
                        <div className="flex gap-4 my-4">
                            <img src="https://i.ibb.co/XtnqtMt/Ellipse-4.png" alt="img"/>
                            <div>
                                <h5 className="font-bold">Walalage Decook</h5>
                                <div className="rating rating-xs">
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default CustomarsReview;