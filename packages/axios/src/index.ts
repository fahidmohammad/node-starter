import axios, { AxiosError, AxiosRequestConfig } from 'axios';

class Http {
  public async get<T>(
    url: string,
    config: AxiosRequestConfig = {},
    max = 4,
    time = 0
  ): Promise<T> {
    try {
      const response = await axios.get<T>(url, config);
      return response.data;
    } catch (error) {
      console.error('AxiosError', error as AxiosError<T>);
      const axiosErrorMessage =
        (error as AxiosError).stack ||
        (error as AxiosError).message ||
        'AxiosError';
      if (time > max) throw new Error(axiosErrorMessage);
      return this.get<T>(url, config, max, time + 1);
    }
  }

  public async post<T, D>(
    url: string,
    data: D = {} as D,
    config: AxiosRequestConfig = {},
    max = 4,
    time = 0
  ): Promise<T> {
    try {
      const response = await axios.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      console.error('AxiosError', error as AxiosError<T>);
      const axiosErrorMessage =
        (error as AxiosError).stack ||
        (error as AxiosError).message ||
        'AxiosError';
      if (time > max) throw new Error(axiosErrorMessage);
      return this.post<T, D>(url, data, config, max, time + 1);
    }
  }

  public async put<T, D>(
    url: string,
    data: D = {} as D,
    config: AxiosRequestConfig = {},
    max = 4,
    time = 0
  ): Promise<T> {
    try {
      const response = await axios.put<T>(url, data, config);
      return response.data;
    } catch (error) {
      console.error('AxiosError', error as AxiosError<T>);
      const axiosErrorMessage =
        (error as AxiosError).stack ||
        (error as AxiosError).message ||
        'AxiosError';
      if (time > max) throw new Error(axiosErrorMessage);
      return this.put<T, D>(url, data, config, max, time + 1);
    }
  }

  public async patch<T, D>(
    url: string,
    data: D = {} as D,
    config: AxiosRequestConfig = {},
    max = 4,
    time = 0
  ): Promise<T> {
    try {
      const response = await axios.patch<T>(url, data, config);
      return response.data;
    } catch (error) {
      console.error('AxiosError', error as AxiosError<T>);
      const axiosErrorMessage =
        (error as AxiosError).stack ||
        (error as AxiosError).message ||
        'AxiosError';
      if (time > max) throw new Error(axiosErrorMessage);
      return this.patch<T, D>(url, data, config, max, time + 1);
    }
  }

  public async delete<T>(
    url: string,
    config: AxiosRequestConfig = {},
    max = 4,
    time = 0
  ): Promise<T> {
    try {
      const response = await axios.delete<T>(url, config);
      return response.data;
    } catch (error) {
      console.error('AxiosError', error as AxiosError<T>);
      const axiosErrorMessage =
        (error as AxiosError).stack ||
        (error as AxiosError).message ||
        'AxiosError';
      if (time > max) throw new Error(axiosErrorMessage);
      return this.delete<T>(url, config, max, time + 1);
    }
  }
}

const http = new Http();

export default http;
