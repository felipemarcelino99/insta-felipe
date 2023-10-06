import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'

export default function List(props) {

  function carregaIcone(likeada) {
    return likeada ? require('./../../img/likeada.png') : require('./../../img/like.png');
  }

  function mostrarLikes(likers) {
    if(likers === 0 ) return;

   return(
    <Text style={styles.likeText}>{likers} {likers > 1 ? 'curtidas' : 'curtida'}</Text>
   ); 
  }

  return (
    <View>
      <View style={styles.perfil}>
        <Image source={{uri: props.data.imgperfil}} style={styles.icone}/>
        <Text style={styles.nome}>{props.data.nome}</Text>
      </View>
      <Image resizeMode='cover' source={{uri: props.data.imgPublicacao}} style={styles.imgFeed}/>
      <View style={styles.boxButtons}>
        <TouchableOpacity>
          <Image source={carregaIcone(props.data.likeada)} style={styles.like}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./../../img/comment.png')} style={styles.comment}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./../../img/send.png')} style={styles.send}/>
        </TouchableOpacity>
      </View>
      {mostrarLikes(props.data.likers)}
      <Text style={styles.nomeRodape}>{props.data.nome}</Text>
      <Text style={styles.descRodape}>{props.data.descricao}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  perfil: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8
  },
  icone: {
    width: 50,
    height: 50,
    borderRadius: 25,

  },  
  nome: {
    fontSize: 22,
    color: '#000',
    marginLeft: 5
  },
  imgFeed: {
    height: 400,
    alignItems: 'center'
  },
  boxButtons: {
    flexDirection: 'row',
    padding: 5,
    gap: 6
  }, 
  like: {
    width: 25,
    height: 25
  },
  likeText: {
    fontWeight: 'bold',
    marginLeft: 6
  },
  comment: {
    width: 25,
    height: 25
  },
  send: {
    width: 25,
    height: 25
  },
  nomeRodape: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 6
  },
  descRodape: {
    marginLeft: 6,
    paddingBottom: 10,
    fontSize: 15
  },
});