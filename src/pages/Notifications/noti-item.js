
import { Avatar, Badge, List, Skeleton } from "antd";
import React, { useState } from "react"
import Moment from 'react-moment';

import { GET_NOTIFICATIONS } from "../../helpers/url_helper";
import { del, get, post, put } from "../../helpers/api_helper";

const NotiItem = ({ item }) => {
    const [showUnRead, setShowUnRead] = useState(!item.read);

    const markRead = (item) => {
        if(item.read) return;
        get(GET_NOTIFICATIONS + "/markRead/" + item.id)
            .then((res) => {
                console.log(res);
            });
    }
    return (
        <List.Item
            style={{
                cursor: showUnRead ? "pointer" : "default",

            }}
            onClick={() => {
                setShowUnRead(false)
                markRead(item);
            }}
            actions={[showUnRead ? <Badge key={item.id} color="hwb(205 6% 9%)" text="" /> : null]}
        >
            <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                    avatar={(item.notification?.sender.userDetail.avatar !== "") ? <Avatar src={item.notification?.sender.userDetail.avatar} /> : <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-info text-white font-size-16">
                            {item.notification?.sender.userDetail.lastName.charAt(0)}
                        </span>
                    </div>}
                    title={<div style={{
                        fontWeight: showUnRead ? 700 : 400
                    }}>{`${item.notification?.sender.userDetail.firstName} ${item.notification?.sender.userDetail.lastName}`}</div>}
                    description={<a href={item.notification?.link}>{item.notification?.message}</a>}
                />
                <div>{<Moment fromNow>{item.createdTime}</Moment>}</div>
            </Skeleton>
        </List.Item>
    )
}

export default NotiItem