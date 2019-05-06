import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  })
};

interface IssuesResult {
  issues: Issue[]
}
@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private issueUrl = '/api/issues';

  constructor(
    private http: HttpClient,
    private apollo: Apollo
  ) { }

  getIssues(): Promise<Issue[]> {
    return this.http.get<Issue[]>(this.issueUrl, httpOptions).toPromise();
  }

  getIssuesFromGraphQL() {
    return this.apollo.watchQuery<IssuesResult>({
      query: gql`
        {
          issues {
            title
            description
            status
            place
            created_at
            user {
              username
              role
            }
          }
        }
      `
    });
  }

  getIssue(id: number): Promise<Issue> {
    return this.http.get<Issue>(`${this.issueUrl}/${id}`, httpOptions).toPromise();
  }

  addIssue(formData): Promise<Issue> {
    return this.http.post<Issue>(this.issueUrl, formData, httpOptions).toPromise();
  }

  modifyIssue(id: number, formData): Promise<Issue> {
    return this.http.put<Issue>(`${this.issueUrl}/${id}`, formData, httpOptions).toPromise();
  }

  deleteIssue(id: number) {
    return this.http.delete(`${this.issueUrl}/${id}`, httpOptions).toPromise();
  }
}
