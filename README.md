# react-top-progress
Uma simples barra de progresso reutilizável para ReactJs, que simula o comportamento do loading (fake) do Youtube e também o progresso de leitura usado em blogs, como Alligator.io.

# Como utilizar
A lib export 3 componentes atualmente, e você pode importá-los dessa maneira:
``` JavaScript
import TopProgress, { ScrollProgress, FakeProgress } from './components/TopProgress';
```
Após o import, você pode utilizar os componentes dessa forma:
``` JavaScript
 <FakeProgress
  isComplete={isFinished}
  onComplete={() => console.log('completado')}
  pauseUntillComplete
/>
... ou ...
<ScrollProgress />
```
## Props Comuns
| Nome        | Valor Padrão  | Tipo  | Detalhes  |
| :------------- |:-------------|:-------------| :-----|
| containerStyles | undefined | object | Define estilos personalizados para o plano de fundo da barra |
| progressLevelStyles | undefined | object | Define estilos personalizados para o nível de progresso da barra |
| progress | 0 | number | Define a porcentagem atual da barra. Surtirá efeito apenas no componente base: TopProgress |
| isGradient | false | Boolean | Define se o gradiente deve ser aplicado ao nível de progresso |
| smooth | false | Boolean | Define se a transição entre os níveis de progresso da barra devem ser suaves |
| animateGradient | true | Boolean | Define se o gradiente deve ser animado |
| gradientColors | array | ['red', 'yellow', 'green', 'blue', 'purple'] | Definição das cores que serão aplicadas ao gradiente do nível de progresso. **NOTA**: Esse array precisa ter um tamanho (length) igual a 5, do contrário o gradiente não será aplicado! |

## FakeProgress Props
| Nome        | Valor Padrão  | Tipo  | Detalhes  |
| :------------- |:-------------|:-------------| :-----|
| isComplete | false | boolean | Caso seja passada com valor true, esse Boolean fará com que a barra tenha seu valor setado para 100% e chamará a função de callback onComplete|
| onComplete | undefined | function | Função de callback que será chamada assim que a barra tiver seu progresso maior ou igual a 100 |
| pauseUntillComplete | false | boolean | Boolean que define se o progresso deve ser pausado assim que chegar em 90% |


# Demonstração
Para ver essa lib em ação, acesse a [demo](https://jolly-villani-501550.netlify.com/)
