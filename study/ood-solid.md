# 객체지향 설계의 5원칙

글 들어가기에 앞서...

이 글은 다시 복습하고자 작성하는 글입니다. 과거에 알았던 내용이지만 최근 누가 물어봤을 때 대답하지 못했기 때문에 제가 까먹었다고 봐야겠죠. (26.09) 어쨌든 글 쓰는 이유는 복습입니다.

## 객체지향 설계 : SOLID


`SOLID는 객체지향 설계(Object-Oriented Design)를 할 때 지켜야 할 다섯 가지 핵심 원칙의 앞글자를 딴 약어다. 2000년대 초반, 소프트웨어 공학의 거장인 로버트 마틴(Robert C. Martin, 일명 Uncle Bob)이 정리했다.
`

[위키독스 - 객체지향 설계의 5대 원칙 : SOLID](https://wikidocs.net/350437)

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

- 의미 : 클래스는 단 한 가지의 기능만을 수행해야 하며, 클래스가 변경되어야 하는 이유는 오직 하나여야 한다.
- 공학적 이점 : 하나의 클래스가 너무 많은 일을 하면(God Class), 한 곳을 고칠 때 연쇄적으로 버그가 발생할 확률이 높다. 책임을 잘게 쪼개면 코드의 재사용성이 높아지고 테스트가 쉬워진다.

예시로 Product 클래스가 재고 관리와 리포트 출력 기능을 모두 갖는다면 책임이 두 개가 된다. 출력 형식이 바뀔 때마다 재고 로직이 담긴 클래스를 수정해야 하므로, 이를 분리하여 변경의 이유를 하나로 제한한다.


```java
// [SRP 준수] 객체의 책임에만 집중한다.
class Product { // 비즈니스 로직(재고 관리) 담당
    String name;
    int stock;
    void addStock(int amount) { this.stock += amount; }
}

class ProductPrinter { // 출력(UI) 로직 담당
    void printReport(Product p) {
        System.out.println("상품명 : " + p.name + " | 재고: " + p.stock);
    }
}
```

※ 위 내용까지는 위키독스의 설명

spring 기반 개발을 하게 되면 DTO, VO, Entity, Repository, DAO, Mapper, Service, ServiceImpl, Controller, Util 등의 다양한 클래스를 두어서 관리하고 사용하는 이유라고 생각합니다. 각각의 역할과 책임(기능)을 나누는 것이죠.

결과적으로
- 객체간의 결합도 낮추기 (다른 객체에 주는 영향도 낮추기)
- 응집도 높이기 (하나의 클래스는 하나의 일에 집중)




### 2. OCP: 개방-폐쇄 원칙 (Open-Closed Principle)

`확장에는 열려 있어야 하고, 변경에는 닫혀 있어야 한다.`



### 3. LSP: 리스코프 치환 원칙 (Liskov Substitution Principle)

`자식 클래스는 언제나 부모 클래스를 대체할 수 있어야 한다.`



### 4. ISP: 인터페이스 분리 원칙 (Interface Segregation Principle)

`범용 인터페이스 하나보다, 구체적인 여러 개의 인터페이스가 낫다.`



### 5. DIP: 의존성 역전 원칙 (Dependency Inversion Principle)

`추상화에 의존해야지, 구체화에 의존하면 안 된다.`


