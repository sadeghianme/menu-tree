import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

declare const $: any;
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  childList: any = [];
  @Input() level = 0;
  @Input() childMargin = 20;
  @Input() marginRight: any;
  @Input() mainList: any = [];
  @Input() apiSetting = {main: 'cache', child: 'cache'};
  @Input() levelsSettings = [
    {main: 'cache', child: 'cache', mainCachePath: '/assets/cache/province.json', mainApiPath: [], mainApiBody: {}, childCachePath: '/assets/cache/cityAndRuralDistrict.json', childApiPath: [], childApiBody: {}},
    {main: 'cache', child: 'cache', mainCachePath: '/assets/cache/cityAndRuralDistrict.json', mainApiPath: [], mainApiBody: {}, childCachePath: '/assets/cache/villageAndRegion.json', childApiPath: [], childApiBody: {}, parentValueName: 'provinceIdString'}
  ];
  constructor(
    private httpService: HttpClient
  ) { }

  ngOnInit() {
    this.level++;
    if (this.mainList && !this.mainList.length) {
      if (this.levelsSettings[0].main === 'cache') {
        this.getMainFromCache().then(res => {});
      } else {
        this.getMainFromApi();
      }
    }
  }

  getMainFromCache() {
    return new Promise(res => {
      if (!this.mainList || this.mainList.length === 0) {
        this.httpService.get(this.levelsSettings[this.level - 1].mainCachePath).subscribe(data => {
            this.mainList = data as string [];
            return res(this.mainList);
          }, (err: HttpErrorResponse) => {
            console.log (err.message);
          }
        );
      } else {
        return res(this.mainList);
      }
    });
  }

  getMainFromApi() {
    // TODO get main tree from api
    // const req: any = this.api.getInfo()[this.levelsSettings[this.level - 1].mainApiPath[0]][this.levelsSettings[this.level - 1].mainApiPath[1]];
    // req.body = this.levelsSettings[this.level - 1].mainApiBody;
    // this.api.callApi(req)
    //   .subscribe((res: any) => {
    //     if (res && res.tree && res.tree.length && !res.tree[0].hasOwnProperty('text') && res.tree[0].hasOwnProperty('name')) {
    //       res.tree.map(elm => {
    //         elm.text = elm.name;
    //         elm.value = elm.idString;
    //       });
    //       this.mainList = res.tree;
    //     } else {
    //       this.mainList = res;
    //     }
    //     console.log(this.mainList, 'this.mainList from main*************');
    //   });
  }

  loadChild(item) {
    if (item.hasOwnProperty('children') && item.children && item.children.length) {
      delete item.children;
      return;
    } else {
      this.mainList.forEach(elm => {
        if (elm.hasOwnProperty('children') && elm.children && elm.children.length) {
          delete elm.children;
        }
      });
      if (this.levelsSettings[this.level - 1] &&
        this.levelsSettings[this.level - 1].child === 'cache' && this.level <= this.levelsSettings.length) {
        this.getChildFromCache(item).then((res: any) => {
          item.children = res;
          if (res && res.length) {
            item.children = item.children.filter(elm => {
              if (elm.hasOwnProperty('parentIdString')) {
                return elm.parentIdString === item.value;
              } else {
                return elm[this.levelsSettings[this.level - 1].parentValueName] === item.value;
              }
            });
            if (item.children && !item.children.length) {
              item.noChild = true;
            }
          } else {
            item.noChild = true;
          }
        });
      } else if (this.level <= this.levelsSettings.length) {
        this.getChildFromApi(item);
      } else if (this.level <= this.levelsSettings.length) {
        item.noChild = true;
      }
    }
  }

  getChildFromCache(item) {
    return new Promise(res => {
      this.httpService.get(this.levelsSettings[this.level - 1].childCachePath).subscribe(data => {
        this.childList = data as string [];
        this.childList = this.childList.filter(elm => {
          if (elm.hasOwnProperty('parentIdString')) {
            return elm.parentIdString === item.value;
          } else {
            return elm.provinceIdString === item.value;
          }
        });
        return res(this.childList);
      }, (err: HttpErrorResponse) => {
        console.log (err.message);
      });
    });
  }

  getChildFromApi(item) {
    // TODO get main tree from api
    // const req = this.api.getInfo()[this.levelsSettings[this.level - 1].childApiPath[0]][this.levelsSettings[this.level - 1].childApiPath[1]];
    // req.body = this.levelsSettings[this.level - 1].childApiBody;
    // if (req.body && req.body.hasOwnProperty('searchInfo')) {
    //   req.body.searchInfo.filters[0].value = item.text;
    // } else if (req.body && req.body.hasOwnProperty('filters')) {
    //   req.body.filters[0].value = item.text;
    // }
    // this.api.callApi(req)
    //   .subscribe((res: any) => {
    //     if (res && res.tree && res.tree.length && !res.tree[0].hasOwnProperty('text') && res.tree[0].hasOwnProperty('name')) {
    //       res.tree.map(elm => {
    //         elm.text = elm.name;
    //         elm.value = elm.idString;
    //       });
    //       item.children = res.tree;
    //     } else {
    //       item.children = res;
    //     }
    //     if (!item.children.length) {
    //       item.noChild = true;
    //     }
    //     console.log(item.children, 'item.children from main*************');
    //   });
  }
}
