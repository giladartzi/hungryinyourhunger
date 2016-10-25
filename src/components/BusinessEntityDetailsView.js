import React from 'react';
import { View, Text, Image, TouchableHighlight, Linking, StyleSheet, ScrollView } from 'react-native';
import BusinessEntityDealCard from './BusinessEntityDealCard.js';
import BusinessEntityMap from './BusinessEntityMap.js';
import Card from './Card.js'
import TextChecklistItem from './TextChecklistItem';
import TextRecord from './TextRecord.js';
import TextWithStyle from './TextWithStyle.js';
import TopHeader from './TopHeader.js';

class BusinessEntityDetailsView extends React.Component {
    render() {
        const styles = StyleSheet.create({
            backButton: {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderColor: 'green',
                borderWidth:1,
            },
            backButtonClickableArea: {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
            backButtonIcon: {
                height: 14,
                width: 14
            },
            detailsCard: {
                marginHorizontal: 10,
                marginTop: 10
            }
        });
        const categoriesString = this.props.businessEntity.categories.join(', ');

        return (
            <View style={{backgroundColor: '#f8f8f8', flex: 1}}>
                <TopHeader title={this.props.businessEntity.name}>
                    <TouchableHighlight onPress={this.props.onBackClick} style={styles.backButtonClickableArea}>
                        <View style={styles.backButton}>
                            <Text>חזור</Text>
                            <Image
                                resizeMode="contain"
                                source={require('../assets/icons/back.png')}
                                style={styles.backButtonIcon}
                            />
                        </View>
                    </TouchableHighlight>
                </TopHeader>
                <ScrollView style={{marginTop: 30}}>
                    <Card style={styles.detailsCard}>
                        <TextWithStyle>{categoriesString}</TextWithStyle>
                        <TextChecklistItem isChecked={this.props.businessEntity.isKosher}>כשר (עם תעודה)</TextChecklistItem>
                        <TextChecklistItem isChecked={this.props.businessEntity.isVegetarianOptions}>חברותי
                            לצמחונים
                        </TextChecklistItem>
                        <TextChecklistItem isChecked={this.props.businessEntity.isVeganFriendly}>
                            חברותי לטבעונים
                        </TextChecklistItem>
                    </Card>
                    <BusinessEntityDealCard>{this.props.businessEntity.deals}</BusinessEntityDealCard>
                    <Card style={styles.detailsCard}>
                        <BusinessEntityMap coordinates={this.props.businessEntity.coordinates} name={this.props.businessEntity.name} />
                        <View style={{marginTop: 10}}>
                            <TextRecord recordKey="כתובת" recordValue={this.props.businessEntity.address} />
                            <TextRecord
                                onPress={() => Linking.openURL(`tel:${this.props.businessEntity.phone}`)}
                                recordKey="טלפון"
                                recordValue={this.props.businessEntity.phone}
                                />
                            <TextRecord recordKey="שעות פתיחה" recordValue={this.props.businessEntity.openingHours} />
                        </View>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}

BusinessEntityDetailsView.displayName = 'BusinessEntityDetailsView';

export default BusinessEntityDetailsView;