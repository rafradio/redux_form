import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, selectDatas } from '../store/selectors';
import { Table, Button } from 'rsuite';
import './rsuitestyles.css';
import '../index.css';


const { Column, HeaderCell, Cell } = Table;

export const Root = () => {
    const dispatch = useDispatch();
    const datas = useSelector(selectDatas);
    // const tableHeadres = ['Масса слитка, г', 'Цена за 1г, руб', 'Стоимость слитка, руб'];
    const tableHeadres = ['id', 'name', 'test'];
    // let data = [{id: '1',firstName: 'firstName', lastName: 'test'}];

    return (
      <>
        <div id="sidebar">
          <h1>React Router Redux Project</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/contacts/1`}>Таблица 1</a>
              </li>
              <li>
                <a href={`/contacts/2`}>Таблица 2</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
        <Table
            height={400}
            width={360}
            data={datas}
        >
          <Column width={60} align="center" fixed>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id" />
          </Column>

          <Column width={150}>
            <HeaderCell>First Name</HeaderCell>
            <Cell dataKey="firstName" />
          </Column>

          <Column width={150}>
            <HeaderCell>Last Name</HeaderCell>
            <Cell dataKey="lastName" />
          </Column>
          {/* {tableHeadres.map((headerName) => {
              <Column width={60} align="center" fixed>
                <HeaderCell>{headerName}</HeaderCell>
                <Cell dataKey="id" />
              </Column>
          })} */}
            
        </Table>
        </div>
      </>
    );
  }