# lambda_integration_service_cloudinary
Lambda function for uploading files to cloudinary

## Getting Started
1. Clone repository

### Prerequisites

Install dependencies using npm (npm install)

```
npm install
```


And Add

```
Add .env file to root directory
```

### Format

```json
  CLOUD_NAME = <CLOUD_NAME>
  API_KEY = <API_KEY>
  API_SECRET = <API_SECRET>
  AWS_ACCESS_KEY_ID = <AWS_ACCESS_KEY_ID>
  AWS_SECRET_ACCESS_KEY = <AWS_SECRET_ACCESS_KEY>
  AWS_REGION = <AWS_REGION>
  LAMBDA_STAGE = <LAMBDA_STAGE>
  AWS_LAMBDA_ARN = <AWS_LAMBDA_ARN>
```

And Add


```
Add event.json file to root directory
```

### Format

```json
  {
  "imageURL":<IMAGE_URL>
  }
```


## Deployment

### Local Deployment

```
grunt
```

### Deploy to AWS LAMBDA

```
grunt deploy
```


### Additional notes about how to deploy this on a live system
1. Create a lambda function on AWS lambda and add lambda function ARN to .env file
2. Create an IAM user with IAM Role that allows the user to deploy to AWS LAMBDA
3. Copy AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY into the .env file
* **WARNING**
This file is ignored in the repo but be extra careful to never include this file in your commit messages



## Authors

* **Selasie Anani** 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
