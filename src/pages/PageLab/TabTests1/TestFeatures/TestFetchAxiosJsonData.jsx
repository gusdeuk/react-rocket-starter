import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './TestCommon.module.scss';

export default function TestComponent(props) {
    // ***********************************************
    // states, inits
    // ***********************************************
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const randomSessionId = useSelector((state) => state.appGlobalData.randomSessionId)
    /// ***********************************************
    // functions and logic
    // ***********************************************
    /// https://blog.logrocket.com/modern-api-data-fetching-methods-react/
    function fetchData() {
        // https://jsonplaceholder.typicode.com/guide/

        const getData = async () => {
            try {
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts?_limit=9&_delay=2000&nocache=' + randomSessionId
                )
                setData(response.data)
                setError(null)
            } catch (err) {
                setError(err.message)
                setData(null)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }
    // ***********************************************
    // use effect
    // ***********************************************
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // ***********************************************
    // render main component
    // ***********************************************
    return (
        <div className={[styles['test-page']]}>
            <div className={'clx-headline-title purple grey top-gutter center'}>Fetch JSon Data / Axios Lib</div>
            {loading && <div>A moment please...</div>}
            {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
            <ul>
                {data &&
                    data.map(({ id, title }) => (
                        <li key={id}>
                            <div>{title}</div>
                        </li>
                    ))}
            </ul>
        </div>
    )
}
