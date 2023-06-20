import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Avatar} from '../../components';
import {JoaoAvatar, BrunoAvatar, GiulianoAvatar, RenatoAvatar} from '../../assets/images';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.line}>
        <Avatar
          image={BrunoAvatar}
          name="Bruno"
          details={{
            name: 'Bruno Henrique de Oliveira',
            description: `Atualmente trabalho com a tecnologia React native, em paralelo estudando Swift e atuando em algumas tarefas em iOS nativo.\n\nSou formado em Análise e desenvolvimento de sistemas pela FATEC Sjc e Pós graduado em Desenvolvimento Mobile pela FIAP.\n\nSou desenvolvedor de software há 6 anos, 3 primeiros anos trabalhando com desenvolvimento voltado a web e backend, e nos últimos 3 anos migrei para a área de desenvolvimento mobile.
          `,
          }}
        />
        <Avatar 
        name="Giuliano" 
        image={GiulianoAvatar}
        details={{
          name: 'Giuliano da Costa Accorsi',
          description: `Atualmente trabalho com Swift.Sou desenvolvedor mobile há três anos, tenho proficiência em Swift e uma sólida formação em Análise e Desenvolvimento de Sistemas.
        `,
        }} 
        />
      </View>
      <View style={styles.line}>
        <Avatar name="João Paulo" image={JoaoAvatar} />
        <Avatar 
        name="Renato" 
        image={RenatoAvatar}
        details={{
          name: 'Renato Santos Nascimento',
          description: `Trabalho com as tecnologias Java/Apex/Swift. Graduado em Sistemas de Informação e atualmente estou me formando em desenvolvimento mobile na FIAP. Trabalho com análise/desenvolvimento de software desde 2019, com maior experiência em Java e agora expandindo os conhecimentos para Mobile.
        `,
        }} 
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  line: {
    margin: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
