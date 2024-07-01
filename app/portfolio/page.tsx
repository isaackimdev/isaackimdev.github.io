'use client';

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    }
    
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);


  return (
    <main className="flex md:flex-row p-4 select-none">
      <aside className="hidden md:block md:w-1/5"></aside>

      <div className="flex-grow">
        <nav className="p-4">
          <Link className="text-blue-400" href={'/'}>
            ◀
          </Link>
        </nav>

        <header className="p-4">
          <h1 className="text-4xl mb-2">김이삭</h1>
          <p className="text-2xl">PL / 서버 개발자</p>
          <p>출생 : 1991년 12월 15일</p>
        </header>
        
        <section className="p-4">
          <h2 className="text-2xl mb-2">About Me</h2>
          <p className="text-emerald-300">문제의 본질을 찾아 해결하는 개발자입니다.</p>
          <p>현재 사조시스템즈에서 사조그룹의 <span className="text-emerald-300">ERP HR 시스템</span>을 개발하고 있습니다.</p>
          <p className="text-emerald-300">사조그룹 계열사 15개 회사 50여 개 사업장의 인사/급여, 연말정산 시스템을 개발/운영하고 있습니다.</p>
          <p>ERP HR 시스템을 통합할 때 많은 문제에 직면하게 되는데, 문제의 본질을 찾아 분석하여 해결해 나아가고 있습니다.</p>
          <p className="mt-4 text-emerald-300">소통하는 개발자입니다.</p>
          <p>문제의 본질을 찾아 해결하기 위해 문제의 이해 관계자와 끊임없이 소통하며 나아갑니다.</p>

        </section>

        <section className="p-4">
          <h2 className="text-2xl mb-2">연락처</h2>
          <ul className="p-4">
            <li>Email: isaac7263@naver.com</li>
            <li>Phone: 010-7577-7263</li>
            <li>
              <Link className="text-blue-400" href={'https://github.com/isaackimdev'}>
                  Github
              </Link>
            </li>
          </ul>
        </section>

        <section className="p-4">
          <h2 className="text-2xl">경력</h2>
          <div className="p-4">
            <h3 className="text-xl">사조시스템즈</h3>
            <p>선임 연구원</p>
            <p>근무기간 : 2020.09.21 ~ 재직중 (3년 10개월)</p>
            <p className="mt-2">담당 업무 및 성과</p>
            <ul className="list-disc list-inside">
              <li>사조그룹 ERP HR 시스템 통합 구축</li>
              <li>사조그룹 15개 회사, 50여 개 사업장 HR 시스템 관리 운영</li>
              <li>사조그룹 연말정산 시스템 개발</li>
              <li>ERP HR 시스템 설계, 개발, 운영, Data Migration</li>
              <li>선원인사급여 프로젝트 PL</li>
              <li>식자재유통관리시스템 운영 / 유지 보수</li>
              <li>선물 세트 주문관리 시스템 운영 / 유지 보수</li>
            </ul>
          </div>

          <div className="p-4">
            <h3 className="text-xl">부동산천국</h3>
            <p>대리</p>
            <p>근무기간 : 2018년 10월 ~ 2019년 2월 (5개월)</p>
            <p className="mt-2">담당 업무 및 성과</p>
            <ul className="list-disc list-inside">
              <li>프로젝트 Migration | php, mysql ▶ spring, oracle</li>
            </ul>
          </div>

          <div className="p-4">
            <h3 className="text-xl">크리노베이션링크</h3>
            <p>대리/팀장 PM</p>
            <p>근무기간 : 2015년 9월 ~ 2017년 6월 (1년 10개월)</p>
            <p className="mt-2">담당 업무 및 성과</p>
            <ul className="list-disc list-inside">
              <li>
                <Link 
                  className="text-blue-400"
                  href={'https://linkareer.com/activity/5346'}
                >
                  콘텐츠기획 마케터 취업역량강화 프로젝트
                </Link>
                &nbsp; PM
              </li>

              <li>
                <Link 
                  className="text-blue-400"
                  href={'https://www.shinailbo.co.kr/news/articleView.html?idxno=495549'}
                >
                  콘텐츠 기획자 취업역량강화 프로젝트
                </Link>
                &nbsp; PM
              </li>

              
              <li>
                <Link 
                  className="text-blue-400"
                  href={'https://platum.kr/archives/38290'}
                >
                  뮤직비즈니스 인재발굴 프로젝트
                </Link>
                &nbsp; PM
              </li>

              <li>연 매출 4000% 상승</li>
            </ul>
          </div>

        </section>

        <section className="p-4">
          <h2 className="text-2xl">학력</h2>
          <div className="p-4">
            <h3 className="text-xl">안양대학교(편입)</h3>
            <p><span className="text-emerald-300">컴퓨터공학전공</span> 수석 졸업 4.42/4.5</p>
            <p>2019년 3월 편입학 ~ 2021년 2월 졸업</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl">국가평생교육진흥원 학점은행제</h3>
            <p>경영전문학사 수료 3.75/4.5</p>
            <p>2016년 5월 ~ 2017년 8월 수료</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl">선문대학교</h3>
            <p>행정학과 중퇴</p>
            <p>2010년 3월 입학 ~ 2015년 4월 중퇴</p>
          </div>
        </section>

        <section className="p-4">
          <h2 className="text-2xl mb-2">기술</h2>
          <ul className="list-disc list-inside p-4">
            <li>Java / Spring</li>
            <li>MSSQL, MySQL, MariaDB, Oracle</li>
            <li>MyBatis, JPA</li>
            <li>Javascript / jQuery / JSP</li>
            <li>React / Next</li>
            <li>Tailwind CSS</li>
          </ul>
        </section>

        <section className="p-4">
          <h2 className="text-2xl mb-2">프로젝트</h2>
          <div className="p-4">
            <h3 className="text-xl text-emerald-300">사조그룹 통합 ERP 구축 프로젝트</h3>
            <p>계열사들의 여러 인사급여 시스템을 하나로 통합 구축한 프로젝트</p>
            <p>2021년 1월 ~ 시스템 운영 및 추가 회사 통합 작업 진행중</p>
            <p>PL로 참여하여, 설계/개발/운영을 해오고 있습니다.</p>
            <p>기술 스택 : </p>
            <p>Java/Spring/MyBatis/MSSQL/jQuery/Javascript</p>
            <p>성과 : </p>
            <ul className="list-disc list-inside">
              <li>사조그룹 인사급여 시스템 통합 (15개 사/50여 개 사업장)</li>
              <li>사조그룹 연말정산 시스템 개발</li>
            </ul>
          </div>

          <div className="p-4">
            <h3 className="text-xl text-emerald-300">선원 인사급여정산 차세대 시스템 구축 프로젝트</h3>
            <p>선원 인사급여정산 차세대 시스템</p>
            <p>2023년 7월 ~ 현재 (연말정산 기간 제외)</p>
            <p>기술 스택 : </p>
            <p>Java/Spring/MyBatis/MSSQL/jQuery/Javascript</p>
            <p>성과 : </p>
            <ul className="list-disc list-inside">
              <li>SPEC & 서버 개발</li>
            </ul>
          </div>

          <div className="p-4">
            <h3 className="text-xl text-emerald-300">비즈니스피플, 비플(beople), Side Project</h3>
            <p>지식 + E-커머스의 결합, 지식 커머스 플랫폼</p>
            <p>개인간 지식을 공유하며 수익을 창출하는 플랫폼</p>
            <p>기술 스택 : </p>
            <p>Java/SpringBoot/MySQL/JPA/SpringSecurity</p>
            <p>성과 : </p>
            <ul className="list-disc list-inside">
              <li>2300명↑ 사용자 가입</li>
              <li>REST API, 소셜 로그인, 결제 기능 개발</li>
              <li>서비스 종료</li>
            </ul>
          </div>
        </section>

        <section className="p-4">
          <h2 className="text-2xl mb-2">교육</h2>
          <div className="p-4">
            <h3 className="text-xl">자바 기반 웹 개발자 양성 과정</h3>
            <p>Java, Spring 기반 웹 교육을 듣고, Spring 기반 웹 개발 프로젝트를 수행했습니다.</p>
            <p>기관 : KGITBANK</p>
            <p>기간 : 2018년 4월 ~ 2018년 10월</p>
          </div>
        </section>

        <section className="p-4">
          <h2 className="text-2xl mb-2">자격</h2>
          <div className="p-4">
            <h3 className="text-xl">정보처리기사</h3>
            <p>한국산업인력공단</p>
            <p>취득일 : 2020년 8월</p>
            <p>자격번호 : 비공개</p>
            <p>합격년월일 : 2020년 8월 28일</p>
            <p>발급년월일 : 2020년 9월 7일</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl">2종보통운전면허</h3>
            <p>경찰청</p>
            <p>취득일 : 2016년 12월</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl">텔레마케팅관리사</h3>
            <p>한국산업인력공단</p>
            <p>취득일 : 2016년 11월</p>
            <p>자격번호 : 비공개</p>
            <p>합격년월일 : 2016년 11월 18일</p>
            <p>발급년월일 : 2016년 12월 14일</p>
          </div>
        </section>
      </div>

      <aside className="hidden md:block md:w-1/5"></aside>
    </main>
  );
}