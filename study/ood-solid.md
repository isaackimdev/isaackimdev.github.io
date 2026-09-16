# 객체지향 설계의 5원칙

글 들어가기에 앞서...

이 글은 다시 복습하고자 작성하는 글입니다. 과거에 알았던 내용이지만 최근 누가 물어봤을 때 대답하지 못했기 때문에 제가 까먹었다고 봐야겠죠. (26.09) 어쨌든 글 쓰는 이유는 복습입니다.

## 객체지향 설계 : SOLID

```
SOLID는 객체지향 설계(Object-Oriented Design)를 할 때 지켜야 할 다섯 가지 핵심 원칙의 앞글자를 딴 약어다. 2000년대 초반, 소프트웨어 공학의 거장인 로버트 마틴(Robert C. Martin, 일명 Uncle Bob)이 정리했다.
```
https://wikidocs.net/350437

객체지향 설계의 5원칙은 소프트웨어를 쉽게 이해하고 유지보수하며 확장할 수 있도록 돕는 지침인 SOLID를 말합니다. 

이는 단일 책임 원칙(SRP), 개방-폐쇄 원칙(OCP), 리스코프 치환 원칙(LSP), 인터페이스 분리 원칙(ISP), 의존성 역전 원칙(DIP)으로 구성됩니다. 

이 원칙은 SW를 이해하기 쉽고, 유연하며, 유지보수하기 좋게 만드는 것입니다.

|원칙|약어|핵심 요약|
|-|-|-|
|단일 책임 원칙|SRP|클래스는 오직 하나의 책임(기능)만 가져야 한다.|
|개방-폐쇄 원칙|OCP|확장에는 열려 있고, 수정에는 닫혀 있어야 한다.|
|리스코프 치환 원칙|LSP|자식 객체는 부모의 역할을 온전히 대체해야 한다.|
|인터페이스 분리 원칙|ISP|거대한 인터페이스보다 구체적인 여러 인터페이스가 낫다.|
|의존성 역전 원칙|DIP|구체 클래스가 아닌 추상화(인터페이스)에 의존해야 한다.|

- SRP : Single Responsibility Principle
- OCP : Open-Closed Principle
- LSP : Liskov Substitution Principle
- ISP : Interface Segregation Principle
- DIP : Dependency Inversion Principle


### 1. SRP: 단일 책임 원칙 (Single Responsibility Principle)

`한 클래스는 하나의 책임만 가져야 한다.`



### 2. OCP: 개방-폐쇄 원칙 (Open-Closed Principle)

`확장에는 열려 있어야 하고, 변경에는 닫혀 있어야 한다.`



### 3. LSP: 리스코프 치환 원칙 (Liskov Substitution Principle)

`자식 클래스는 언제나 부모 클래스를 대체할 수 있어야 한다.`



### 4. ISP: 인터페이스 분리 원칙 (Interface Segregation Principle)

`범용 인터페이스 하나보다, 구체적인 여러 개의 인터페이스가 낫다.`



### 5. DIP: 의존성 역전 원칙 (Dependency Inversion Principle)

`추상화에 의존해야지, 구체화에 의존하면 안 된다.`


