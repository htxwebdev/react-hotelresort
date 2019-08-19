import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { RoomConsumer } from '../context'
import Loading from '../components/Loading'

const RoomContainer = () => {

    return (
        <RoomConsumer>
            {
                (value) => {

                    console.log(value)
                    return (
                        <div>
                            Room Container
                            <RoomFilter />
                            <RoomList />
                        </div>
                    )
                }
            }
        </RoomConsumer>

    )
}

export default RoomContainer
