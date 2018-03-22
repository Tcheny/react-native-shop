import React from 'react';
import { Card, ListItem, Button } from 'react-native-elements'

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listItems: [
                 { 
                    name: "NIKE AIR MAX 95",
                    price:"170",
                    avatar:"http://www.jammerreviews.com/wp-content/uploads/2012/10/nike_swim_logo-300x300.jpg",
                },
                { 
                    name: "AIR JORDAN 12 RETRO",
                    price: "190",
                    avatar: "http://www.jammerreviews.com/wp-content/uploads/2012/10/nike_swim_logo-300x300.jpg",
                },
                { 
                    name: "REEBOK PUMP SUPREME PREMIUM",
                    price: "199,95",
                    avatar: "https://pbs.twimg.com/profile_images/849630271951581184/ZamB414f_400x400.jpg",
                },
                { 
                    name: "REEBOK LEGACY LIFTER",
                    price: "179,95",
                    avatar: "https://pbs.twimg.com/profile_images/849630271951581184/ZamB414f_400x400.jpg",
                },
                {
                    name: "ADIDAS PHARRELL WILLIAMS TENNIS HU PRIMEKNIT",
                    price: "129,95",
                    avatar: "https://mvp.tribesgds.com/dyn/7l/Mt/7lMtOtGOk18/_/tIIyubfFgL0/6LJK/adidas-logo.png",
                },
                {
                    name: "ADIDAS NMD_CS2 PRIMEKNIT",
                    price: "179,95",
                    avatar: "https://mvp.tribesgds.com/dyn/7l/Mt/7lMtOtGOk18/_/tIIyubfFgL0/6LJK/adidas-logo.png",
                },
            ]
        };
    }

    render() {
        return (
            <Card>
                {this.state.listItems.map((item, key) => {
                    return (
                        <ListItem 
                            key={key}
                            avatar={item.avatar}
                            title={item.name}
                        />
                    )
                })}
            </Card>
        )
    }
}