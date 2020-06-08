---
id: quick-start
title: Quick-Start Guide
---

## Walk-through

In this walkthrough, we try to use Octopus to manage a dummy device. We will perform the following steps in order:

1. Deploy Octopus
1. Deploy Device Model & Device Adaptor
1. Create Device Link
1. Manage Device

### Deploy Octopus

There are [two ways](docs/octopus/deployment.md) to deploy Octopus, for convenience, we use the deployment manifest file to bring up the Octopus. The installer YAML file is under the [`deploy/e2e`](./deploy/e2e) directory:

```shell script
$ kubectl apply -f https://raw.githubusercontent.com/cnrancher/octopus/master/deploy/e2e/all_in_one_without_webhook.yaml
namespace/octopus-system created
customresourcedefinition.apiextensions.k8s.io/devicelinks.edge.cattle.io created
role.rbac.authorization.k8s.io/octopus-leader-election-role created
clusterrole.rbac.authorization.k8s.io/octopus-manager-role created
rolebinding.rbac.authorization.k8s.io/octopus-leader-election-rolebinding created
clusterrolebinding.rbac.authorization.k8s.io/octopus-manager-rolebinding created
service/octopus-brain created
service/octopus-limb created
deployment.apps/octopus-brain created
daemonset.apps/octopus-limb created

```

After installed, we can verify the status of Octopus as below:

```shell script
$ kubectl get all -n octopus-system
NAME                                 READY   STATUS    RESTARTS   AGE
pod/octopus-limb-d4nbz               1/1     Running   0          40s
pod/octopus-limb-5g9q8               1/1     Running   0          40s
pod/octopus-limb-zsx7c               1/1     Running   0          40s
pod/octopus-brain-7767fcc4cf-g8str   1/1     Running   0          40s
pod/octopus-limb-mcv5v               1/1     Running   0          40s

NAME                    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
service/octopus-brain   ClusterIP   10.43.150.114   <none>        8080/TCP   40s
service/octopus-limb    ClusterIP   10.43.64.223    <none>        8080/TCP   40s

NAME                          DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
daemonset.apps/octopus-limb   4         4         4       4            4           <none>          40s

NAME                            READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/octopus-brain   1/1     1            1           40s

NAME                                       DESIRED   CURRENT   READY   AGE
replicaset.apps/octopus-brain-7767fcc4cf   1         1         1       40s

```

### Deploy Device Model & Device Adaptor

Octopus has prepared a dummy adaptor for testing, which does not need to be connected to a real device. So we can imagine that the dummy device is a realistic device in here.

At first, we need to describe the device as a resource in Kubernetes. This description process is modeling the device. In Kubernetes, the best way to describe resources is to use [CustomResourceDefinitions](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#customresourcedefinitions), so **defining a device model in Octopus is actually defining the CustomResourceDefinitions.** Take a quick look at this `DummyDevice` model: 

```yaml
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  ...
  name: dummydevices.devices.edge.cattle.io
spec:
  group: devices.edge.cattle.io
  names:
    kind: DummyDevice
    listKind: DummyDeviceList
    plural: dummydevices
    singular: dummydevice
  scope: Namespaced
  versions:
  - name: v1alpha1
    schema:
      openAPIV3Schema:
        description: DummyDevice is the Schema for the dummy device API
        properties:
          ...
          spec:
            description: DummyDeviceSpec defines the desired state of DummyDevice
            properties:
              gear:
                description: Specifies how fast the device should be
                enum:
                - slow
                - middle
                - fast
                type: string
              "on":
                description: Turn on the device
                type: boolean
            required:
            - "on"
            type: object
          status:
            description: DummyDeviceStatus defines the observed state of DummyDevice
            properties:
              gear:
                description: Reports the current gear
                enum:
                - slow
                - middle
                - fast
                type: string
              rotatingSpeed:
                description: Reports the detail number of speed
                format: int32
                type: integer
            type: object
        type: object
    ...
status:
    ...

```

The dummy adaptor installer YAML file is under the [`adaptors/dummy/deploy/e2e`](./adaptors/dummy/deploy/e2e) directory, the `all_in_one.yaml` includes the device model and the device adaptor, we can apply them into the cluster directly:

```shell script
$ kubectl apply -f https://raw.githubusercontent.com/cnrancher/octopus/master/adaptors/dummy/deploy/e2e/all_in_one.yaml
customresourcedefinition.apiextensions.k8s.io/dummydevices.devices.edge.cattle.io created
clusterrole.rbac.authorization.k8s.io/octopus-adaptor-dummy-manager-role created
clusterrolebinding.rbac.authorization.k8s.io/octopus-adaptor-dummy-manager-rolebinding created
daemonset.apps/octopus-adaptor-dummy-adaptor created

$ kubectl get all -n octopus-system
NAME                                      READY   STATUS    RESTARTS   AGE
pod/octopus-limb-d4nbz                    1/1     Running   0          4m56s
pod/octopus-limb-5g9q8                    1/1     Running   0          4m56s
pod/octopus-limb-zsx7c                    1/1     Running   0          4m56s
pod/octopus-brain-7767fcc4cf-g8str        1/1     Running   0          4m56s
pod/octopus-limb-mcv5v                    1/1     Running   0          4m56s
pod/octopus-adaptor-dummy-adaptor-vgpgf   1/1     Running   0          24s
pod/octopus-adaptor-dummy-adaptor-kg5rw   1/1     Running   0          25s
pod/octopus-adaptor-dummy-adaptor-2m4xf   1/1     Running   0          26s
pod/octopus-adaptor-dummy-adaptor-tn5kz   1/1     Running   0          24s

NAME                    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
service/octopus-brain   ClusterIP   10.43.150.114   <none>        8080/TCP   4m56s
service/octopus-limb    ClusterIP   10.43.64.223    <none>        8080/TCP   4m56s

NAME                                           DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
daemonset.apps/octopus-limb                    4         4         4       4            4           <none>          4m56s
daemonset.apps/octopus-adaptor-dummy-adaptor   4         4         4       4            4           <none>          3m19s

NAME                            READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/octopus-brain   1/1     1            1           4m56s

NAME                                       DESIRED   CURRENT   READY   AGE
replicaset.apps/octopus-brain-7767fcc4cf   1         1         1       4m56s

```

It is worth noting that we have granted the permission to Octopus for managing `DummyDevice`:

```shell script
$ kubectl get clusterrolebinding | grep octopus
octopus-manager-rolebinding                            6m42s
octopus-adaptor-dummy-manager-rolebinding              5m5s

```