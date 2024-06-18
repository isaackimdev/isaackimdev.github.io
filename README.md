# isaackimdev.github.io
Isaac Kim's Next.js Page

1. Check node.js
2. Create Project : `npx create-next-app@latest`
3. Install Dependencies : `npm i`
4. Run Project : `npm run dev` or `yarn dev` 
    - http://localhost:3000


### Static Exports 
route 파일 경로들에 대해 HTML 파일을 생성한다. 
Static exports 하여 번틀 사이즈를 줄일 수 있고 더 빨리 로드할 수 있다.

```bash
next build
```

### Image Optimization
파일 `next.config.js`에 image loader를 정의하는 것으로 이미지 최적화를 할 수 있다.
[Static Exports](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)

