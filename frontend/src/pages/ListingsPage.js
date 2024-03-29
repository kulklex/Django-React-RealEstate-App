import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import Pagination from '../components/Pagination'

const ListingsPage = () => {
    const [listings, setListings] = useState([])
    const [count, setCount] = useState(0)
    const [previous, setPrevious] = useState('')
    const [next, setNext] = useState('')
    const [active, setActive] = useState(1)

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/listings/?page=1`);

                setListings(res?.data?.results)
                setCount(res?.data?.count)
                setPrevious(res?.data?.previous)
                setNext(res?.data?.next)
            }
            catch (err) {
                console.error(err)
            }
        }

        fetchData();
    }, []);

    const DisplayListings = () => {
        let display = [];
        let result = [];

        listings.map(listing => {
            return display.push(
                <Card
                    title={listing?.title}
                    address={listing?.address}
                    city={listing?.city}
                    state={listing?.state}
                    price={listing?.price}
                    sale_type={listing?.sale_type}
                    home_type={listing?.home_type}
                    bedrooms={listing?.bedrooms}
                    bathrooms={listing?.bathrooms}
                    sqft={listing?.sqft}
                    photo_main={listing?.photo_main}
                    slug={listing?.slug}
                />
            );
        });

        for (let i = 0; i < listings.length; i += 3) {
            result.push(
                <div key={i} className='row'>
                    <div className='col-1-of-3'>
                        {display[i]}
                    </div>
                    <div className='col-1-of-3'>
                        {display[i+1] ? display[i+1] : null}
                    </div>
                    <div className='col-1-of-3'>
                        {display[i+2] ? display[i+2] : null}
                    </div>
                </div>
            );
        }

        return result;
    };

    const visitPage = (page) => {
        axios.get(`${process.env.REACT_APP_API_URL}/listings/?page=${page}`)
        .then(res => {
            setListings(res?.data?.results);
            setPrevious(res?.data?.previous);
            setNext(res?.data?.next);
            setActive(page);
        })
        .catch(err => {
            console.error(err)
        });
    };

    const previousPage = () => {
        axios.get(previous)
        .then(res => {
            setListings(res?.data?.results);
            setPrevious(res?.data?.previous);
            setNext(res?.data?.next);
            if (previous)
                setActive(active-1);
        })
        .catch(err => {
            console.error(err)
        });
    };

    const nextPage = () => {
        axios.get(next)
        .then(res => {
            setListings(res?.data?.results);
            setPrevious(res?.data?.previous);
            setNext(res?.data?.next);
            if (next)
                setActive(active+1);
        })
        .catch(err => {
            console.error(err)
        });
    };

    return (
        <main className='listings'>
            <section className='listings__listings'>
                <DisplayListings/>
            </section>
            
            <section className='listings__pagination'>
                <div className='row'>
                    <Pagination
                        listingPerPage={3}
                        count={count}
                        visitPage={visitPage}
                        previousPage={previousPage}
                        nextPage={nextPage}
                        active={active}
                        setActivePage={setActive}
                    />
                </div>
            </section>
        </main>
    );
};

export default ListingsPage;