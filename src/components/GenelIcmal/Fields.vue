<template>
  <div class="ritz grid-container">
    <table class="waffle" cellspacing="0" cellpadding="0">
      <thead>
      <tr>
        <th></th>
        <th colspan="4"> İŞLETME GİDERLERİ</th>
        <th colspan="2"> BAKIM ONARIM GİDERLERİ</th>
        <th> SATIŞLARIN MALİYETİ</th>
        <th> GENEL YÖNETİM GİDERLERİ</th>
        <th> TCDD TAŞIMACILIK</th>
        <th> TOPLAM </th>
      </tr>
      </thead>
      <tbody>
      <tr class="subheading">
        <td></td>
        <td>YOLCU</td>
        <td>LOJİSTİK</td>
        <td>YHT</td>
        <td>MARMARAY</td>
        <td>ARAÇ BAKIM</td>
        <td>ADF</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr v-for="flatGider in flatGiderler" :class="classNames[flatGider.level]">
        <td>{{flatGider.label}}</td>

        <td v-for="col in flatGider.cols"
            :is="col.scope ? 'TableRowInput' : 'TableRowDisplay'"
            v-bind="{[col.scope ? 'scope' : 'getterName']: col.scope || col.getter, divider: flatGider.type === 'ratio' ? null : 1000}">
        </td>
      </tr>
      </tbody>
    </table>

    <div class="row start-xs note">* Tüm değerler Bin TL üzerinden görüntülenir. Değiştirme sırasında normal değer görünür.</div>

  </div>
</template>


<script>
  import TableRowInput from '@/components/TableRowInput';
  import TableRowDisplay from '@/components/TableRowDisplay';
  import giderler from '@/store/genelIcmal/giderler/template';
  import { TypeOf } from '@/store/genelIcmal/util';
  import { rows } from '@/util/config';


  export default {
    data() {
      return {
        classNames: ['', 'section-title', 'group-title', 'disabled-light', 'level-1', 'level-2', 'level-3'],
        giderler,
      };
    },
    props: {
      scope: Array,
    },
    computed: {
      parentScope() {
        const scope = [...this.scope];
        scope.pop();
        return scope;
      },
      strParentScope() {
        return this.parentScope.join('/');
      },
      strScope() {
        return this.scope.join('/');
      },
      flatGiderler() {
        return this.flatten(this.giderler);
      },
    },
    methods: {
      flatten(expense, scope = []) {
        let parentExpense;
        const currScope = `${this.strScope}/${scope.join('/')}${scope.length ? '/' : ''}`;
        let childrenExpense;
        if (expense.children && expense.children.length) {
          parentExpense = {
            label: expense.label,
            level: scope.length,
            cols: rows.reduce((prev, row) => [
              ...prev,
              {
                getter: `${currScope}${expense.name}/${row.key}/toplam`,
              },
            ], []),
          };

          childrenExpense = [...expense.children.reduce((prev, curr) => {
            let child = this.flatten(curr, [...scope, expense.name]);
            if (TypeOf(child) === 'object') {
              child = [child];
            }
            return [
              ...prev,
              ...child,
            ];
          }, [])];

          if (!expense.virtualNode) {
            if (expense.order === 'last') {
              childrenExpense = [...childrenExpense, parentExpense];
            } else {
              childrenExpense = [parentExpense, ...childrenExpense];
            }
          }
        } else {
          switch (TypeOf(expense.getters)) {
            case 'string':
              childrenExpense = {
                label: expense.label,
                level: scope.length,
                cols: rows.reduce((prev, row) => [
                  ...prev,
                  {
                    getter: `${currScope}${expense.name}/${row.key}`,
                  },
                ], []),
              };
              break;
            case 'array': {
              const expenseGetterObj = expense.getters
                .reduce((prev, getterObj) => ({ ...prev, [getterObj.name]: getterObj.getter }), {});

              childrenExpense = {
                label: expense.label,
                level: scope.length,
                cols: rows.reduce((prev, row) => {
                  if (row.key in expenseGetterObj) {
                    return [
                      ...prev,
                      {
                        getter: `${currScope}${expense.name}/${row.key}`,
                      }];
                  }
                  return [
                    ...prev,
                    {
                      scope: [...this.scope, ...scope, expense.name, row.key],
                    }];
                }, []),
              };
              break;
            }
            case 'undefined':
              childrenExpense = {
                label: expense.label,
                level: scope.length,
                cols: rows.reduce((prev, row) => [
                  ...prev,
                  {
                    scope: [...this.scope, ...scope, expense.name, row.key],
                  }], []),
              };
              break;
            default:
              childrenExpense = {};
          }
        }

        if (expense.reducers) {
          const reducers = expense.reducers.map((reducer) => {
            const result = {
              label: reducer.label,
              level: scope.length,
              type: reducer.type,
              cols: rows.reduce((prev, row) => [
                ...prev,
                {
                  getter: `${currScope}${expense.name}/${reducer.name}/${row.key}`,
                },
              ], []),
            };

            result.cols.splice(6, 0, {
              getter: `${currScope}${expense.name}/${reducer.name}/satislarinMaaliyeti`,
            });
            result.cols.push({
              getter: `${currScope}${expense.name}/${reducer.name}/tcddTasimacilik`,
            });
            result.cols.push({
              getter: `${currScope}${expense.name}/${reducer.name}/genelToplam`,
            });

            return result;
          });

          childrenExpense = [...childrenExpense, ...reducers];
        }

        if (childrenExpense.cols) {
          childrenExpense.cols.splice(6, 0, {
            getter: `${currScope}${expense.name}/satislarinMaaliyeti`,
          });
          childrenExpense.cols.push({
            getter: `${currScope}${expense.name}/tcddTasimacilik`,
          });
          childrenExpense.cols.push({
            getter: `${currScope}${expense.name}/genelToplam`,
          });
        } else {
          parentExpense.cols.splice(6, 0, {
            getter: `${currScope}${expense.name}/satislarinMaaliyeti/toplam`,
          });
          parentExpense.cols.push({
            getter: `${currScope}${expense.name}/tcddTasimacilik/toplam`,
          });
          parentExpense.cols.push({
            getter: `${currScope}${expense.name}/genelToplam/toplam`,
          });
        }

        return childrenExpense;
      },
    },
    components: {
      TableRowInput,
      TableRowDisplay,
    },
  };
</script>


<style scoped lang="postcss">
  @import "../../styles/colors.css";

  .grid-container {
    flex: 1;
  }

  tr > td:first-child {
    text-align: left;
  }

  .level-1 > td:first-child {
    padding-left: 15px;
  }

  .level-2 > td:first-child {
    padding-left: 30px;
  }

  .level-3 > td:first-child {
    padding-left: 45px;
  }

  td:nth-child(-n + 10):nth-child(n + 10) {
    background-image: linear-gradient(rgba(254, 204, 255, 0.45), rgba(254, 204, 255, 0.45));
  }

  td:nth-child(-n + 5):nth-child(n + 2) {
    background-image: linear-gradient(hsla(211, 86%, 49%, 0.2), hsla(211, 86%, 49%, 0.2));
  }
</style>
