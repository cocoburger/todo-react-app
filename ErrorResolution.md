
## material-ul/core install error

- ### 오류 내용
<blockquote> npm ERR! Could not resolve dependency:
  npm ERR! peer react@"^16.8.0 || ^17.0.0" from @material-ui/core@4.12.4" </blockquote>
  
  <br>
  
- ### 해결 방법
 <blockquote> npm install @material-ui/core --legacy-peer-deps  </blockquote>

<br>

- ### 궁금점
    #### --legacy-peer-deps 무엇인가? 
 <blockquote>  npm 4 ~ 6 version peer dependencies가 있으면 경고만 뜨고 설치는 되었다.
    version 7부터는 install을 block한다. 그래서 해당 error가 발생한 것으로 보인다.
    --force or --legacy-peer-deps 명령어를 사용하여 설치를 할 수 있다.  <br>
    --force : package-lock.json에 몇 가지의 다른 의존 버전들을 추가한다. <br>
    --legacy : peerDependency가 상이해도 설치한다.<br>
    --legacy보단 --force 명령어를 먼저 사용하여 설치를 하는 것이 좋아보인다.
</blockquote>

<br>

 - ###  peer dependencies?

    - 실제 package에서 require나 import 하지는 않지만 특정 라이브러리나 툴에 호환성을 필요로 할 경우에 
    명시하는 dependencies다. npm3 ~ npm6까지는 peerDependencies가 자동으로 설치되지 않았고
    v7에서는 default로 설치된다.



