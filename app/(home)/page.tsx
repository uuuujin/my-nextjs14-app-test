export const metadata = {
  title: 'Home',
  // description: 'The best Movies on the best framework',
}
// rootlayout가 export default되어 있고, metadata는 export만 되고 있음
// 당연 하게도 default export 객체는 하나만 지정 할수 있기 때문

export default function Page() {
    return <div>
        <h1>Hello!!</h1>
    </div>
}