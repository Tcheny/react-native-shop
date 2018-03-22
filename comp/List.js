import React from 'react';
import { StyleSheet } from 'react-native';
// import { Card, ListItem } from 'react-native-elements'
import { Card, Text, Button } from 'react-native-elements';
import { View } from 'native-base';
// import { PricingCard } from 'react-native-elements';

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listItems: [
                 { 
                    name: "NIKE AIR MAX 95",
                    price:"170€",
                    avatar:"https://media.endclothing.com/media/f_auto,q_auto,w_760,h_760/prodmedia/media/catalog/product/1/3/13-10-2017_nike_airmax95_black_anthracite_609048-092_sh_1.jpg",
                },
                { 
                    name: "AIR JORDAN 12 RETRO",
                    price: "190€",
                    avatar: "http://www.gite-cantal-meandres.fr/media/import/Images/air%20jordan%2012%20retro%20homme-198swi.jpg",
                },
                { 
                    name: "REEBOK PUMP SUPREME PREMIUM",
                    price: "199,95€",
                    avatar: "https://media.endclothing.com/media/f_auto,q_auto,w_760,h_760/prodmedia/media/catalog/product/0/5/05-05-2017_reebok_pumpplussupremeengine_black_bs8807_sp_2.jpg",
                },
                { 
                    name: "REEBOK LEGACY LIFTER",
                    price: "179,95€",
                    avatar: "https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/472321edac810f9b2465a359d8cdc0b5/c/n/cn4607-004-web.jpg",
                },
                {
                    name: "ADIDAS PHARRELL WILLIAMS TENNIS HU PRIMEKNIT",
                    price: "129,95€",
                    avatar: "https://www.urbanstaroma.com/27664-large_default/adidas-x-pharrell-williams-tennis-hu-primeknit-cq2630.jpg",
                },
                {
                    name: "ADIDAS NMD_CS2 PRIMEKNIT",
                    price: "179,95€",
                    avatar: "https://www.urbanstaroma.com/25836-large_default/adidas-nmdcs2-primeknit-cq2038.jpg",
                },
            ]
        };
    }

    render() {
        return (
            <View style={styles.listCart}>
                {this.state.listItems.map((item, key) => {
                    return (
                        <Card
                            key={key}
                            title={item.name}
                            image={{ uri: item.avatar}}
                            imageStyle={styles.image}>
                        <Text style={styles.text} h3>
                            {item.price}
                        </Text>
                        <Button
                            icon={{ name: 'add' }}
                            backgroundColor='#03A9F4'
                            buttonStyle={styles.button}
                            title='Add cart' />
                        </Card>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '70%',
        height: 200,
        margin: '15%'
    },
    text: {
        marginBottom: 10,
        textAlign: 'center'
    },
    button: {
        borderRadius: 0,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 0
    }
});